import React from 'react'
import "./common.css"
import Typist from "react-typist"
import {GH_PAGE} from "../../util/consts/consts"
import _ from "lodash"
import {getMyAge} from "../../util/date/date";

const Common = ({onTypistDone = _.noop}) => (
    <div className="common">
        <Typist startDelay={1500}
                avgTypingDelay={45}
                cursor={{hideWhenDone: true}}
                onTypingDone={onTypistDone}>
                <span>
                    Hi!
                </span>

            <br/>
            <Typist.Delay ms={500}/>

            <span>
                    My name is <span className="name">Mikhael Sokolov </span> aka&nbsp;
                <span className="github-link" onClick={() => window.open(GH_PAGE, "_blank")}>
                        sokomishalov
                    </span>
                </span>

            <br/>
            <Typist.Delay ms={500}/>

            <span>
                    Software engineer, mostly
                    <span className="kotlin"> Kotlin</span>/
                    <span className="java">Java</span>/
                    <span className="js">JS</span>/
                    <span className="dart">Dart</span>/
                    <span className="others">etc.</span>
                </span>
            <br/>

            <Typist.Delay ms={500}/>
            <span>
                    I am {getMyAge()} y.o., born and live in Moscow, Russia
                </span>
            <br/>

            <Typist.Delay ms={500}/>
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
            <span className="fan-of">* drinking vodka <Typist.Backspace count={16} delay={500}/> chilling out</span>
            <br/>
        </Typist>
    </div>
);

export default Common;