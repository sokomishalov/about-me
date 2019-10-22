import React from 'react'
import "./timeline.css"
import {Steps} from "antd"
import Fade from "react-reveal/Fade"

const Timeline = () => (
    <div className="timeline">
        <Fade>
            <Steps direction="vertical">
                <Steps.Step title="VTB" description="VTB"/>
                <Steps.Step title="Sberbank" description="Sberbank"/>
                <Steps.Step title="Sberbank technologies" description="Sberbank technologies"/>
            </Steps>
        </Fade>
    </div>
);

export default Timeline;