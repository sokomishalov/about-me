import React from 'react'
import "./common.css"
import Typist from "react-typist"
import { GH_PAGE, USERNAME } from "../../util/consts/consts"
import _ from "lodash"
import { getMyAge } from "../../util/date/date";

const Common = ({onTypistDone = _.noop}) => (
    <div className="common">
        <Typist startDelay={ 1000 }
                avgTypingDelay={ 25 }
                cursor={ {hideWhenDone: true} }
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
                Software engineer. JVM/JS/Dart/Rust/etc.
            </span>
            <br/>

            <Typist.Delay ms={ 300 }/>
            <span>
                    I am { getMyAge() } y.o., born and live in Moscow, Russia.
                </span>
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
            <span className="fan-of">* drinking vodka<Typist.Backspace count={ 14 } delay={ 500 }/>chilling out</span>
            <br/>
        </Typist>
    </div>
);

export default Common;