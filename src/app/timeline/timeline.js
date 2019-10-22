import React from 'react'
import "./timeline.css"
import {Steps} from "antd"

const Timeline = () => (
    <div className="timeline">
        <Steps direction="vertical">
            <Steps.Step title="VTB" description="VTB"/>
            <Steps.Step title="Sberbank" description="Sberbank"/>
            <Steps.Step title="Sberbank technologies" description="Sberbank technologies"/>
        </Steps>
    </div>
);

export default Timeline;