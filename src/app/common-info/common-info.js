import React from 'react';
import "./common-info.css"
import Typist from "react-typist";


const CommonInfo = () => (
    <div className="common">
        <Typist startDelay={1500} avgTypingDelay={40} cursor={{hideWhenDone: true}}>
            <span>
                Hi!
            </span>

            <br/>
            <Typist.Delay ms={500}/>

            <span>
                My name is <span className="name">Mikhael Sokolov </span> aka soko misha lov
                <Typist.Backspace count={15} delay={500}/>
                &nbsp;
                <a href="https://github.com/sokomishalov"
                   target="_blank">
                    sokomishalov
                </a>
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
                Born and live in Moscow, Russia
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

export default CommonInfo;