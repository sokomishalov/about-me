import React, {useState} from 'react'
import "./App.css"
import {Divider} from "antd"
import Fade from "react-reveal/Fade"
import Timeline from "./timeline/timeline"
import Contacts from "./contacts/contacts"
import Activity from "./activity/activity"
import Common from "./common/common"

const App = () => {
    const [typistDone, setTypistDone] = useState(false)

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
