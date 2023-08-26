import React, {useEffect, useState} from 'react'
import "./project-description.css"
import ReactMarkdown from "react-markdown"
import asciidoctor from "asciidoctor";
import {Spin} from "antd"
import {loadProjectReadme} from "../../util/github/github"
import rehypeRaw from "rehype-raw";
import _ from "lodash"

const ProjectDescription = ({project}) => {

    const [loading, setLoading] = useState(false)
    const [readme, setReadme] = useState("")
    const [fileName, setFileName] = useState("")

    useEffect(() => {
        setLoading(true)
        loadProjectReadme(project["nameWithOwner"])
            .then(data => {
                setReadme(atob(data["content"]));
                setFileName(data["name"])
            })
            .finally(() => setLoading(false))
    }, [project])

    let projectReadme;
    if (loading) {
        projectReadme = <div className="project-readme-loader"><Spin/></div>
    } else if (_.endsWith(fileName, "md")) {
        projectReadme = <ReactMarkdown rehypePlugins={[rehypeRaw]}
                                       linkTarget={ "_blank" }
                                       transformLinkUri={ (uri) => (
                                           _.includes(uri, "://")
                                               ? uri
                                               : `${ project["url"] }/blob/master/${ _.replace(uri, "./", "") }`
                                       ) }>
            { readme }
        </ReactMarkdown>
    } else if (_.endsWith(fileName, "adoc")) {
        projectReadme = React.createElement("div", {
            dangerouslySetInnerHTML: {
                __html: asciidoctor().convert(readme)
            }
        })
    } else {
        projectReadme = readme
    }

    return (
        <div className="project">
            <div className="project-desc">{ project["description"] }</div>
            <a className="project-link" href={ project["url"] } target="_blank" rel="noreferrer">{ project["url"] }</a>
            <div className="project-readme">
                { projectReadme }
            </div>
        </div>
    );
};

export default ProjectDescription;