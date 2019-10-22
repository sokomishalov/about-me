import React, {useState} from 'react'
import "./App.css"
import CommonInfo from "./common-info/common-info"
import Timeline from "./timeline/timeline"
import Fade from "react-reveal/Fade";

const App = () => {
    const [typistDone, setTypistDone] = useState(false)

    return (
        <div className="sokomishalov">
            <CommonInfo onTypistDone={() => setTypistDone(true)}/>
            {typistDone
            && <Fade>
                <Timeline/>
            </Fade>
            }
        </div>
    )
}

export default App
