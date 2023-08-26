import React from 'react'
import "./timeline.css"
import {Steps} from "antd"
import _ from "lodash";
import {COMPANIES} from "./companies";

const Timeline = () => (
    <div className="timeline">
        <div>Timeline so far</div>
        <Steps direction="vertical"
               labelPlacement="vertical"
               className="steps"
               items={ _.map(_.reverse(COMPANIES), c => (
                   {
                       title: <div className="company-name">{ c["name"] }</div>,
                       icon: <img src={ c["logo"] } width={ 20 } height={ 20 } alt=""/>,
                       className: "timeline-step",
                       onClick: () => window.open(c["companyLink"], "_blank"),
                       description: <>
                           <div className="company-position">{ c["position"] }</div>
                           <div className="company-years">{ c["years"] }</div>
                       </>
                   }
               )) }>
        </Steps>
    </div>
);

export default Timeline;