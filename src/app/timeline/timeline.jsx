import React from 'react'
import "./timeline.scss"
import {COMPANIES} from "./companies";
import {formatDuration, formatPeriod} from "../../util/date/date";

const Duration = ({ from, to }) => {
    const duration = formatDuration(from, to)
    return <>{ formatPeriod(from, to) }{ duration && <span className="timeline-duration"> · { duration }</span> }</>
}

const Role = ({ role, current }) => (
    <li className={ `timeline-role${ current ? " timeline-role-current" : "" }` }>
        <span className="timeline-role-dot" aria-hidden="true"/>
        <div className="timeline-role-title">{ role.title }</div>
        { role.from && <div className="timeline-role-period"><Duration from={ role.from } to={ role.to }/></div> }
    </li>
)

const Company = ({ company }) => {
    const ongoing = !company.to
    return (
        <li className="timeline-company">
            <a className="timeline-company-header" href={ company.companyLink } target="_blank" rel="noreferrer">
                <span className="timeline-company-logo">
                    <img src={ company.logo } width={ 24 } height={ 24 } alt={ `${ company.name } logo` }/>
                </span>
                <span>
                    <span className="timeline-company-name">{ company.name }</span>
                    <span className="timeline-company-period"><Duration from={ company.from } to={ company.to }/></span>
                </span>
            </a>
            <ol className={ `timeline-roles${ company.roles.length > 1 ? " timeline-roles-promotions" : "" }` }>
                { company.roles.map((role, i) => (
                    <Role key={ role.title } role={ role } current={ ongoing && i === 0 }/>
                )) }
            </ol>
            { company.description && <div className="timeline-company-description">{ company.description }</div> }
        </li>
    )
}

const Timeline = () => (
    <section className="timeline">
        <h2 className="section-title">Timeline so far</h2>
        <ol className="timeline-card timeline-companies">
            { COMPANIES.map(c => <Company key={ c.name } company={ c }/>) }
        </ol>
    </section>
);

export default Timeline;
