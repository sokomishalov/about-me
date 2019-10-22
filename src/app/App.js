import React, {useState} from 'react';
import "./App.css"
import CommonInfo from "./common-info/common-info";
import Timeline from "./timeline/timeline";

const App = () => {
    const [typistDone, setTypistDone] = useState(false)

    return (
        <div className="sokomishalov">
            <CommonInfo onTypistDone={() => setTypistDone(true)}/>
            {typistDone && <Timeline/>}
        </div>
    );
};

export default App;
