import React, {useEffect, useState} from 'react'
import "./activity.css"
import {USERNAME} from "../../util/consts/consts"
import Fade from "react-reveal/Fade"
import _ from "lodash"
import {Card, Icon} from "antd"
import {openPage} from "../../util/window/window";
import {getColorByLanguage} from "../../util/github/github";

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
                                        <span className="caption">{it["watchers_count"]}</span>
                                    </div>

                                    <div className="stars">
                                        <Icon type="star"/>
                                        <span className="caption">{it["stargazers_count"]}</span>
                                    </div>

                                    <div className="forks">
                                        <Icon type="fork"/>
                                        <span className="caption">{it["forks_count"]}</span>
                                    </div>

                                    {!_.isEmpty(it["language"]) &&
                                    <div className="language">
                                        <div className="language-color"
                                              style={{backgroundColor: getColorByLanguage(it["language"])}}/>
                                        <span className="caption">{it["language"]}</span>
                                    </div>
                                    }
                                </div>
                            </Card>
                        ))}
                </div>
            </Fade>
        )
    )
}

export default Activity