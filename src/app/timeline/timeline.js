import React from 'react'
import "./timeline.css"
import { Steps } from "antd"
import _ from "lodash";
import { COMPANIES } from "./companies";

const Timeline = () => (
    <div className="timeline">
        <div>Timeline so far</div>
        <Steps direction="vertical"
               labelPlacement="vertical"
               className="steps">
            { _.map(_.reverse(COMPANIES), c => (
                <Steps.Step key={ c["name"] }
                            title={ <div className="company-name">{ c["name"] }</div> }
                            description={
                                <>
                                    <div className="company-position">{ c["position"] }</div>
                                    <div className="company-years">{ c["years"] }</div>
                                </>
                            }
                            icon={ (
                                <img src={ c["logo"] }
                                     width={ 20 }
                                     height={ 20 }
                                     alt=""/>
                            ) }
                            className="timeline-step"
                            onClick={ () => window.open(c["companyLink"], "_blank") }/>
            )) }
        </Steps>
    </div>
);

export default Timeline;