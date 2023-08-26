import React, {useEffect, useState} from 'react'
import "./activity.css"
import {Fade} from "react-awesome-reveal"
import _ from "lodash"
import {Card, Modal} from "antd"
import {getMyContributions, getMyProjects} from "../../util/github/github";
import ProjectDescription from "./project-description";
import EyeOutlined from "@ant-design/icons/lib/icons/EyeOutlined";
import StarOutlined from "@ant-design/icons/lib/icons/StarOutlined";
import ForkOutlined from "@ant-design/icons/lib/icons/ForkOutlined";

const Activity = () => {

    const [loading, setLoading] = useState(true)
    const [contributedProjects, setContributedProjects] = useState([])
    const [myProjects, setMyProjects] = useState([])
    const [openedProject, setOpenedProject] = useState(null)

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

    const renderProjects = (data) => (
        <div className="activity-projects">
            { _.orderBy(data, ["stargazers.totalCount", "forks.totalCount", "watchers.totalCount"], ["desc", "desc", "desc"])
                .map(it => (
                    <Card key={ it["id"] }
                          hoverable
                          className="project"
                          onClick={ () => { setOpenedProject(it) }}>
                        <div className="project-name">{ it["name"] }</div>
                        <div className="project-description">{ it["description"] }</div>
                        <div className="project-icons">
                            <div className="watchers">
                                <EyeOutlined/>
                                <span className="caption">{ _.get(it, "watchers.totalCount") }</span>
                            </div>

                            <div className="stars">
                                <StarOutlined/>
                                <span className="caption">{ _.get(it, "stargazers.totalCount") }</span>
                            </div>

                            <div className="forks">
                                <ForkOutlined/>
                                <span className="caption">{ _.get(it, "forks.totalCount") }</span>
                            </div>
                        </div>
                        <div className="project-languages">
                            { _.map(_.get(it, "languages.nodes", []), o => (
                                <div className="language" key={ o["color"] }>
                                    <div className="language-color" style={ { backgroundColor: o["color"] } }/>
                                    <div className="caption">{ o["name"] }</div>
                                </div>
                            )) }
                        </div>
                    </Card>
                )) }
            <Modal
                open={!_.isEmpty(openedProject)}
                maskClosable={true}
                closable={true}
                width={1000}
                title={_.get(openedProject, "nameWithOwner", "")}
                okText={"Close"}
                cancelButtonProps={{style: {display: "none"}}}
                onOk={() => setOpenedProject(null)}
                onCancel={() => setOpenedProject(null)}
                destroyOnClose={true}
            >
                <ProjectDescription project={openedProject}/>
            </Modal>
        </div>
    )

    return (
        !loading && (
            <Fade className="activity">
                <div>Open source projects I've contributed to (last year)</div>
                { renderProjects(contributedProjects) }
                <div>My open source projects</div>
                { renderProjects(myProjects) }
            </Fade>
        )
    )
}

export default Activity