import React, {useState} from 'react'
import "./App.css"
import {Divider} from "antd"
import {Fade} from "react-awesome-reveal"
import Timeline from "./timeline/timeline"
import Contacts from "./contacts/contacts"
import Common from "./common/common"
import CustomThemeProvider from "../styles/CustomThemeProvider"

const App = () => {
    const [typistDone, setTypistDone] = useState(false)

    return (
        <CustomThemeProvider>
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
        </CustomThemeProvider>
    )
}

const SectionDivider = () => <Divider style={ { margin: "30px 0" } }/>

export default App
