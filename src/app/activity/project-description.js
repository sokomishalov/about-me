import React, { useEffect, useState } from 'react'
import "./project-description.css"
import ReactMarkdown from "react-markdown"
import { Spin } from "antd";
import { loadProjectReadme } from "../../util/github/github";

const ProjectDescription = ({project}) => {

    const [loading, setLoading] = useState(false)
    const [md, setMd] = useState("")

    useEffect(() => {
        setLoading(true)
        loadProjectReadme(project["nameWithOwner"])
            .then(data => setMd(data))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="project">
            <div className="project-desc">{ project["description"] }</div>
            <a className="project-link" href={ project["url"] } target="_blank">{ project["url"] }</a>
            <div className="project-md">
                { loading
                    ? <div className="project-md-loader"><Spin/></div>
                    : <ReactMarkdown source={ md } escapeHtml={ false }/> }
            </div>
        </div>
    );
};

export default ProjectDescription;