import React from 'react'
import "./common.css"
import Typist from "react-typist"
import {BIRTHDAY, GH_PAGE} from "../../util/consts/consts"
import moment from "moment"
import _ from "lodash"

const Common = ({onTypistDone = _.noop}) => {

    const age = moment().diff(moment(BIRTHDAY, "DD.MM.YYYY"), 'years').toString();

    return (
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
                    I am {age} y.o., born and live in Moscow, Russia
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
                <span className="fan-of">* football (it's not soccer!!!)</span>
                <br/>
                <span className="fan-of">* memes</span>
                <br/>
                <span className="fan-of">* sarcasm</span>
                <br/>
                <span className="fan-of">* drinking vodka</span>
                <Typist.Backspace count={14} delay={500}/>
                chilling out
                <br/>
            </Typist>
        </div>
    );
};

export default Common;