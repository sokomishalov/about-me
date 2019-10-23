import React, {useState} from 'react'
import "./App.css"
import Common from "./common/common"
import Timeline from "./timeline/timeline"
import Fade from "react-reveal/Fade";
import {Divider} from "antd";
import Contacts from "./contacts/contacts";

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
                </Fade>
            )}
        </div>
    )
}

const SectionDivider = () => <Divider style={{margin: "30px 0"}}/>

export default App
