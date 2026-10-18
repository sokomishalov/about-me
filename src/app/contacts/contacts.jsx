import React from 'react'
import "./contacts.scss"
import {GH_PAGE, USERNAME} from "../../util/consts/consts"
import {SOCIALS} from "./socials";

const PIC_SIZE = 300;

const isExternal = (href) => href.startsWith("http") || href.endsWith(".pdf")

const Contacts = () => (
    <section className="contacts">
        <h2 className="section-title">Contacts</h2>
        <div className="contacts-content">
            <a className="card contacts-avatar"
               href={ GH_PAGE }
               target="_blank"
               rel="noreferrer"
               style={ { width: PIC_SIZE } }>
                <img alt={ `${ USERNAME } GitHub avatar` }
                     width={ PIC_SIZE }
                     height={ PIC_SIZE }
                     src={ `${ GH_PAGE }.png?size=${ PIC_SIZE }` }/>
                <div className="contacts-avatar-meta">
                    <div className="contacts-avatar-title">{ USERNAME }</div>
                    <div className="contacts-avatar-description">github.com</div>
                </div>
            </a>
            <ul className="contacts-socials">
                { SOCIALS.map(s => (
                    <li key={ s.tip } data-tip={ s.tip }>
                        <a className="contacts-socials-button"
                           href={ s.href }
                           aria-label={ s.tip }
                           style={ { background: s.color } }
                           { ...(isExternal(s.href) ? { target: "_blank", rel: "noreferrer" } : {}) }>
                            { s.icon }
                        </a>
                    </li>
                )) }
            </ul>
        </div>
    </section>
)

export default Contacts
