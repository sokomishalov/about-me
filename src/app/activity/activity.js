import React, {useEffect, useState} from 'react'
import "./activity.css"
import {Fade} from "react-awesome-reveal"
import _ from "lodash"
import {Card, Modal} from "antd"
import {getMyProjects, languageColor} from "../../util/github/github";
import ProjectDescription from "./project-description";
import EyeOutlined from "@ant-design/icons/lib/icons/EyeOutlined";
import StarOutlined from "@ant-design/icons/lib/icons/StarOutlined";
import ForkOutlined from "@ant-design/icons/lib/icons/ForkOutlined";

const Activity = () => {

    const [loading, setLoading] = useState(true)
    const [myProjects, setMyProjects] = useState([])
    const [openedProject, setOpenedProject] = useState(null)

    useEffect(() => {
        setLoading(true)
        getMyProjects()
            .catch(error => { console.log("Failed to load projects", error) })
            .then((projects) => { setMyProjects(projects) })
            .finally(() => { setLoading(false) })
    }, [])

    const renderProjects = (data) => (
        <div className="activity-projects">
            { _.orderBy(data, ["stargazers_count", "forks_count", "watchers_count", "name"], ["desc", "desc", "desc", "asc"])
                .filter(it => !_.get(it, "isFork"))
                .map(it => (
                    <Card key={ _.get(it, "id") }
                          hoverable
                          className="project"
                          onClick={ () => { setOpenedProject(it) }}>
                        <div className="project-name">{ _.get(it, "name") }</div>
                        <div className="project-description">{ _.get(it, "description") }</div>
                        <div className="project-icons">
                            <div className="watchers">
                                <EyeOutlined/>
                                <span className="caption">{ _.get(it, "watchers_count") }</span>
                            </div>

                            <div className="stars">
                                <StarOutlined/>
                                <span className="caption">{ _.get(it, "stargazers_count") }</span>
                            </div>

                            <div className="forks">
                                <ForkOutlined/>
                                <span className="caption">{ _.get(it, "forks_count") }</span>
                            </div>
                        </div>
                        <div className="project-languages">
                            <div className="language">
                                <div className="language-color" style={ { backgroundColor: it["language"] ? languageColor(it["language"]) : "" } }/>
                                <div className="caption">{ it["language"] }</div>
                            </div>
                        </div>
                    </Card>
                )) }
            <Modal
                open={!_.isEmpty(openedProject)}
                maskClosable={true}
                closable={true}
                width={1000}
                title={_.get(openedProject, "full_name", "")}
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
                <div>My open source projects</div>
                { renderProjects(myProjects) }
            </Fade>
        )
    )
}

export default Activity
