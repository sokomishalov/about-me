import React, {useEffect, useState} from 'react'
import "./project-description.scss"
import ReactMarkdown, {defaultUrlTransform} from "react-markdown"
import {decodeBase64Utf8, loadProjectReadme} from "../../util/github/github"
import rehypeExternalLinks from "rehype-external-links";
import rehypeRaw from "rehype-raw";

const isAbsolute = (uri) => uri.includes("://") || uri.startsWith("#") || uri.startsWith("mailto:")

// README links are relative to the repo root: images must point at raw files, links at the GitHub file view
const resolveRepoUrl = (project) => (uri, key) => {
    if (isAbsolute(uri)) return defaultUrlTransform(uri)
    const path = uri.replace(/^\.?\//, "")
    const view = key === "src" ? "raw" : "blob"
    return defaultUrlTransform(`${ project.html_url }/${ view }/${ project.default_branch }/${ path }`)
}

const ProjectDescription = ({ project }) => {

    const [loading, setLoading] = useState(true)
    const [readme, setReadme] = useState(null)

    useEffect(() => {
        let cancelled = false
        setLoading(true)
        setReadme(null)
        loadProjectReadme(project.full_name)
            .then(async data => {
                const text = decodeBase64Utf8(data.content)
                const name = data.name.toLowerCase()
                if (name.endsWith(".adoc")) {
                    const {default: asciidoctor} = await import("asciidoctor")
                    return { kind: "html", content: asciidoctor().convert(text) }
                }
                if (name.endsWith(".md") || name.endsWith(".markdown")) {
                    return { kind: "markdown", content: text }
                }
                return { kind: "text", content: text }
            })
            .then(result => { if (!cancelled) setReadme(result) })
            .catch(error => console.log("Failed to load readme", error))
            .finally(() => { if (!cancelled) setLoading(false) })
        return () => { cancelled = true }
    }, [project])

    let projectReadme;
    if (loading) {
        projectReadme = <div className="project-details-readme-loader">Loading…</div>
    } else if (!readme) {
        projectReadme = <div className="project-details-readme-empty">No README available.</div>
    } else if (readme.kind === "markdown") {
        projectReadme = <ReactMarkdown rehypePlugins={ [rehypeRaw, [rehypeExternalLinks, { target: '_blank' }]] }
                                       urlTransform={ resolveRepoUrl(project) }>
            { readme.content }
        </ReactMarkdown>
    } else if (readme.kind === "html") {
        projectReadme = <div dangerouslySetInnerHTML={ { __html: readme.content } }/>
    } else {
        projectReadme = <pre>{ readme.content }</pre>
    }

    return (
        <div className="project-details">
            <div className="project-details-desc">{ project.description }</div>
            <a className="project-details-link" href={ project.html_url } target="_blank" rel="noreferrer">{ project.html_url }</a>
            <div className="project-details-readme">
                { projectReadme }
            </div>
        </div>
    );
};

export default ProjectDescription;
