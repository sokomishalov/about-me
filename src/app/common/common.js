import React from 'react'
import "./common.css"
import Typist from "react-typist"
import { GH_PAGE, USERNAME } from "../../util/consts/consts"
import _ from "lodash"
import { getMyAge } from "../../util/date/date";
import { languageColor } from "../../util/github/github";

const Common = ({ onTypistDone = _.noop }) => (
    <div className="common">
        <Typist startDelay={ 1000 }
                avgTypingDelay={ 25 }
                cursor={ { hideWhenDone: true } }
                onTypingDone={ onTypistDone }>
                    <span>
                        Hi!
                    </span>

            <br/>
            <Typist.Delay ms={ 300 }/>

            <span>
                My name is <span className="name">Mikhael Sokolov </span> aka&nbsp;
                <span className="github-link" onClick={ () => window.open(GH_PAGE, "_blank") }>
                            { USERNAME }
                    </span>
                    .
                </span>

            <br/>
            <Typist.Delay ms={ 300 }/>

            <span>
                Software engineer.&nbsp;
                <span style={ { color: languageColor("Java") } }>Java</span>/
                    <span style={ { color: languageColor("Kotlin") } }>Kotlin</span>/
                    <span style={ { color: languageColor("JavaScript") } }>JS</span>/
                    <span style={ { color: languageColor("Dart") } }>Dart</span>/
                    <span style={ { color: languageColor("Rust") } }>Rust</span>/
                    <span style={ { color: "white" } }>etc.</span>
                </span>
            <br/>

            <Typist.Delay ms={ 300 }/>
            <span>I am { getMyAge() } y.o., born and live in Moscow, Russia.</span>
            <br/>

            <Typist.Delay ms={ 300 }/>
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
            <span className="fan-of">* drinking vodka<Typist.Backspace count={ 14 } delay={ 500 }/>chilling</span>
            <br/>
        </Typist>
    </div>
);

export default Common;