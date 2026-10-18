import React, {useCallback, useState} from 'react'
import "./App.scss"
import Timeline from "./timeline/timeline"
import Contacts from "./contacts/contacts"
import Activity from "./activity/activity"
import Common from "./common/common"

const App = () => {
    const [introDone, setIntroDone] = useState(false)
    const onIntroDone = useCallback(() => setIntroDone(true), [])

    return (
        <main className="sokomishalov">
            <Common onIntroDone={ onIntroDone }/>
            { introDone && (
                <div className="fade-in">
                    <SectionDivider/>
                    <Contacts/>
                    <SectionDivider/>
                    <Timeline/>
                    <Activity divider={ <SectionDivider/> }/>
                </div>
            ) }
        </main>
    )
}

const SectionDivider = () => <hr className="section-divider"/>

export default App
