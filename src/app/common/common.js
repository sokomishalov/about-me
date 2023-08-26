import React, {useState} from 'react'
import "./common.css"
import Typist from "react-typist-component"
import {GH_PAGE, USERNAME} from "../../util/consts/consts"
import _ from "lodash"
import {getMyAge} from "../../util/date/date";
import {languageColor} from "../../util/github/github";

const Common = ({ onTypistDone = _.noop }) => {
    const [typing, setTyping] = useState(true)

    let cursor;
    if (typing)
        cursor = "|"
    else
        cursor = <></>;

    return (
        <div className="common">
            <Typist startDelay={500}
                    typingDelay={25}
                    cursor={cursor}
                    onTypingDone={() => { setTyping(false); onTypistDone(); }}>
                        <span>
                            Hi!
                        </span>

                <br/>
                <Typist.Delay ms={250}/>

                <span>
                    My name is <span className="name">Mikhael Sokolov </span> aka&nbsp;
                    <span className="github-link" onClick={() => window.open(GH_PAGE, "_blank")}>
                        {USERNAME}
                    </span>
                    .
                </span>

                <br/>
                <Typist.Delay ms={250}/>

                <span>
                    Software engineer.&nbsp;
                    <span style={{color: languageColor("Java")}}>JVM</span>/
                    <span style={{color: languageColor("JavaScript")}}>JS</span>/
                    <span style={{color: languageColor("Dart")}}>Dart</span>/
                    <span style={{color: languageColor("Rust")}}>Rust</span>/
                    <span style={{color: "white"}}>etc.</span>
                </span>
                <br/>

                <Typist.Delay ms={250}/>
                <span>I am {getMyAge()} y.o., born in Moscow 🇷🇺, based in Tbilisi 🇬🇪.</span>
                <br/>

                <Typist.Delay ms={250}/>
                <span>
                        Fan of:
                    </span>
                <br/>
                <span className="fan-of">* coding</span>
                <br/>
                <span className="fan-of">* films, series and video games</span>
                <br/>
                <span className="fan-of">* football (it's not soccer !!!)</span>
                <br/>
                <span className="fan-of">* memes</span>
                <br/>
                <span className="fan-of">* sarcasm</span>
                <br/>
                <span className="fan-of">* drinking vodka<Typist.Backspace count={14} delay={500}/>chilling</span>
                <br/>
            </Typist>
        </div>
    );
};

export default Common;