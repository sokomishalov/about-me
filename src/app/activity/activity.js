import React, {useEffect, useState} from 'react'
import "./activity.css"
import {USERNAME} from "../../util/consts/consts"
import Fade from "react-reveal/Fade"
import _ from "lodash"
import {Card, Icon} from "antd"
import {openPage} from "../../util/window/window";

const Activity = () => {

    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.github.com/users/${USERNAME}/repos`)
            .then(it => it.json())
            .then(it => {
                setProjects(it)
                setLoading(false)
            })
    }, [])

    return (
        !loading && (
            <Fade className="activity">
                <div>Open source activity</div>
                <div className="activity-projects">
                    {_.orderBy(projects, ["stargazers_count"], ["desc"])
                        .map(it => (
                            <Card key={it["id"]}
                                  hoverable
                                  className="project"
                                  onClick={() => openPage(it["html_url"])}>
                                <div className="project-name">{_.toLower(it["full_name"])}</div>
                                <div className="project-description">{it["description"]}</div>
                                <div className="project-badges">
                                    <div className="watchers">
                                        <Icon type="eye"/>
                                        <span className="count">{it["watchers_count"]}</span>
                                    </div>

                                    <div className="stars">
                                        <Icon type="star"/>
                                        <span className="count">{it["stargazers_count"]}</span>
                                    </div>

                                    <div className="forks">
                                        <Icon type="fork"/>
                                        <span className="count">{it["forks_count"]}</span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                </div>
            </Fade>
        )
    )
}

export default Activity