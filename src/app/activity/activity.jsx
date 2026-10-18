import React, {lazy, Suspense, useEffect, useRef, useState} from 'react'
import "./activity.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCodeFork, faStar} from "@fortawesome/free-solid-svg-icons";
import {getMyProjects, languageColor} from "../../util/github/github";
import {USERNAME} from "../../util/consts/consts";

// markdown/asciidoc renderers are heavy, load them only when a project is opened
const ProjectDescription = lazy(() => import("./project-description"))

const byPopularity = (a, b) =>
    (b.stargazers_count - a.stargazers_count) ||
    (b.forks_count - a.forks_count) ||
    a.name.localeCompare(b.name)

const Activity = ({ divider = null }) => {

    const [myProjects, setMyProjects] = useState([])
    const [openedProject, setOpenedProject] = useState(null)
    const dialogRef = useRef(null)

    useEffect(() => {
        getMyProjects()
            .then((projects) => setMyProjects(
                projects
                    // forks and the profile README repo (USERNAME/USERNAME) aren't projects
                    .filter(it => !it.fork && it.name !== USERNAME)
                    .sort(byPopularity)
            ))
            .catch(error => console.log("Failed to load projects", error))
    }, [])

    useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog) return
        if (openedProject && !dialog.open) dialog.showModal()
        if (!openedProject && dialog.open) dialog.close()
    }, [openedProject])

    // the section is optional: hide it entirely when GitHub is unavailable or rate-limited
    if (myProjects.length === 0) return null

    return (
        <>
            { divider }
            <section className="activity fade-in">
                <h2 className="section-title">My open source projects</h2>
                <div className="activity-projects">
                    { myProjects.map(it => (
                        <button key={ it.id }
                                type="button"
                                className="card project"
                                onClick={ () => setOpenedProject(it) }>
                            <div className="project-name">{ it.name }</div>
                            <div className="project-description">{ it.description }</div>
                            <div className="project-icons">
                                <div className="stars" title="Stars">
                                    <FontAwesomeIcon icon={ faStar }/>
                                    <span className="caption">{ it.stargazers_count }</span>
                                </div>

                                <div className="forks" title="Forks">
                                    <FontAwesomeIcon icon={ faCodeFork }/>
                                    <span className="caption">{ it.forks_count }</span>
                                </div>
                            </div>
                            <div className="project-languages">
                                { it.language && (
                                    <div className="language">
                                        <div className="language-color" style={ { backgroundColor: languageColor(it.language) } }/>
                                        <div className="caption">{ it.language }</div>
                                    </div>
                                ) }
                            </div>
                        </button>
                    )) }
                </div>
                <dialog ref={ dialogRef }
                        className="project-dialog"
                        onClose={ () => setOpenedProject(null) }
                        onClick={ (e) => { if (e.target === dialogRef.current) setOpenedProject(null) } }>
                    { openedProject && (
                        <div className="project-dialog-content">
                            <div className="project-dialog-header">
                                <div className="project-dialog-title">{ openedProject.full_name }</div>
                                <button type="button"
                                        className="project-dialog-close"
                                        aria-label="Close"
                                        onClick={ () => setOpenedProject(null) }>
                                    ×
                                </button>
                            </div>
                            <Suspense fallback={ <div className="project-details-readme-loader">Loading…</div> }>
                                <ProjectDescription project={ openedProject }/>
                            </Suspense>
                        </div>
                    ) }
                </dialog>
            </section>
        </>
    )
}

export default Activity
