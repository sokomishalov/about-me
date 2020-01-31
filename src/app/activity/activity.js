import React, { useEffect, useState } from 'react'
import "./activity.css"
import Fade from "react-reveal/Fade"
import _ from "lodash"
import { Card, Icon, Modal } from "antd"
import { getMyContributions, getMyProjects } from "../../util/github/github";
import ProjectDescription from "./project-description";

const Activity = () => {

    const [loading, setLoading] = useState(true)
    const [contributedProjects, setContributedProjects] = useState([])
    const [myProjects, setMyProjects] = useState([])

    useEffect(() => {
        setLoading(true)
        Promise.all([
            getMyContributions(),
            getMyProjects()
        ]).then(([contr, mine]) => {
            setContributedProjects(_.get(contr, "viewer.repositoriesContributedTo.nodes", []))
            setMyProjects(_.get(mine, "viewer.repositories.nodes", []))
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    const mainLang = (it) => _.get(it, "languages.nodes[0]", {})

    const openProjectModal = (project) => {
        Modal.info({
            maskClosable: true,
            width: 1000,
            icon: null,
            title: project["nameWithOwner"],
            content: <ProjectDescription project={ project }/>,
            okText: "Close"
        });
    }

    const renderProjects = (data) => (
        <div className="activity-projects">
            { _.orderBy(data, ["stargazers.totalCount", "watchers.totalCount", "forks.totalCount"], ["desc", "desc", "desc"])
                .map(it => (
                    <Card key={ it["id"] }
                          hoverable
                          className="project"
                          onClick={ () => openProjectModal(it) }>
                        <div className="project-name">{ _.toLower(it["nameWithOwner"]) }</div>
                        <div className="project-description">{ it["description"] }</div>
                        <div className="project-bottom">
                            <div className="project-bottom-badges">
                                <div className="watchers">
                                    <Icon type="eye"/>
                                    <span className="caption">{ _.get(it, "watchers.totalCount") }</span>
                                </div>

                                <div className="stars">
                                    <Icon type="star"/>
                                    <span className="caption">{ _.get(it, "stargazers.totalCount") }</span>
                                </div>

                                <div className="forks">
                                    <Icon type="fork"/>
                                    <span className="caption">{ _.get(it, "forks.totalCount") }</span>
                                </div>
                            </div>
                            <div className="language">
                                <div className="language-color"
                                     style={ {backgroundColor: _.get(mainLang(it), "color")} }/>
                                <div className="caption">{ _.get(mainLang(it), "name") }</div>
                            </div>
                        </div>
                    </Card>
                )) }
        </div>
    )


    return (
        !loading && (
            <Fade className="activity">
                <div>Open source projects I've contributed to</div>
                { renderProjects(contributedProjects) }
                <div>My open source projects</div>
                { renderProjects(myProjects) }
            </Fade>
        )
    )
}

export default Activity