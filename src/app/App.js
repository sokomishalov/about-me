import React, {useState} from 'react'
import "./App.css"
import {Divider} from "antd";
import Fade from "react-reveal/Fade";
import Common from "./common/common"
import Timeline from "./timeline/timeline"
import Contacts from "./contacts/contacts";
import Activity from "./activity/activity";

const App = () => {
    const [typistDone, setTypistDone] = useState(true)

    return (
        <div className="sokomishalov">
            <Common onTypistDone={() => setTypistDone(true)}/>
            {typistDone && (
                <Fade>
                    <SectionDivider/>
                    <Contacts/>
                    <SectionDivider/>
                    <Timeline/>
                    <SectionDivider/>
                    <Activity/>
                </Fade>
            )}
        </div>
    )
}

const SectionDivider = () => <Divider style={{margin: "30px 0"}}/>

export default App