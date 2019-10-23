import React from 'react'
import "./timeline.css"
import {Steps} from "antd"
import SberbankLogo from "../../images/sber.png"
import VtbLogo from "../../images/vtb.png"
import BmstuLogo from "../../images/bmstu.png"
import _ from "lodash";

const COMPANIES = [
    {
        name: "VTB",
        position: "Software engineer, architect",
        years: "2019 - till now",
        logo: VtbLogo,
        companyLink: "https://www.vtb.ru/"
    },
    {
        name: "Sberbank",
        position: "Software engineer",
        years: "2017 - 2019",
        logo: SberbankLogo,
        companyLink: "https://www.sberbank.ru"
    },
    {
        name: "Sberbank technology",
        position: "Software engineer",
        years: "2015 - 2017",
        logo: SberbankLogo,
        companyLink: "https://sber-tech.com/"
    },
    {
        name: "Bauman Moscow State Technical University",
        position: "Student",
        years: "2013 - 2017",
        logo: BmstuLogo,
        companyLink: "http://www.bmstu.ru/mstu/English/"
    }
]

const Timeline = () => (
    <div className="timeline">
        <div>Timeline</div>
        <Steps direction="vertical"
               labelPlacement="vertical"
               className="steps">
            {_.map(COMPANIES, c => (
                <Steps.Step key={c["name"]}
                            title={<div className="company-name">{c["name"]}</div>}
                            description={
                                <>
                                    <div className="company-position">{c["position"]}</div>
                                    <div className="company-years">{c["years"]}</div>
                                </>
                            }
                            icon={(
                                <img src={c["logo"]}
                                     width={20}
                                     height={20}
                                     alt=""/>
                            )}
                            className="timeline-step"
                            onClick={() => window.open(c["companyLink"], "_blank")}/>
            ))}
        </Steps>
    </div>
);

export default Timeline;