import React, { useEffect, useState } from 'react'
import "./activity.css"
import Fade from "react-reveal/Fade"
import _ from "lodash"
import { Card, Icon } from "antd"
import { openPage } from "../../util/window/window";
import { getMyContributions, getMyProjects } from "../../util/github/github";

const Activity = () => {

    const [loading, setLoading] = useState(true)
    const [contributed, setContributed] = useState([])
    const [owned, setOwned] = useState([])

    useEffect(() => {
        setLoading(true)
        Promise.all([
            getMyContributions(),
            getMyProjects()
        ]).then(([c, m]) => {
            setContributed(_.get(c, "viewer.repositoriesContributedTo.nodes", []));
            setOwned(_.get(m, "viewer.repositories.nodes", []));
        }).finally(() => setLoading(false))
    }, [])

    const mainLang = (it) => _.get(it, "languages.nodes[0]", {})

    const renderProjects = (data) => (
        <div className="activity-projects">
            { _.orderBy(data, ["stargazers.totalCount"], ["desc"])
                .map(it => (
                    <Card key={ it["id"] }
                          hoverable
                          className="project"
                          onClick={ () => openPage(it["url"]) }>
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
                                <div className="language-color" style={ {backgroundColor: _.get(mainLang(it), "color")} }/>
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
                { renderProjects(contributed) }
                <div>My open source projects</div>
                { renderProjects(_.filter(owned, it => !_.get(it, "isFork", false))) }
            </Fade>
        )
    )
}

export default Activity