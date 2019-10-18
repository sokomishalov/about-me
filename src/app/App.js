import React from 'react';
import "./App.css"
import Typist from "react-typist";

const App = () => (
    <div className="sokomishalov">
        <Typist startDelay={2000}>
            <span>
                Hi!
            </span>

            <br/>
            <Typist.Delay ms={500}/>

            <span>
                My name is <span className="name">Mikhael Sokolov </span> aka soko misha lov
                <Typist.Backspace count={15} delay={1000}/>
                &nbsp;
                <a href="https://github.com/sokomishalov"
                   target="_blank"
                   rel="noopener noreferrer">
                    sokomishalov
                </a>
            </span>

            <br/>
            <Typist.Delay ms={500}/>

            <span>
                Software engineer. Mostly
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
            <span className="fan-of">* films and series</span>
            <br/>
            <span className="fan-of">* football (it's not soccer!!!)</span>
            <br/>
            <span className="fan-of">* memes</span>
            <br/>
            <span className="fan-of">* sarcasm</span>
            <br/>
            <span className="fan-of">* drinking vodka</span>
            <Typist.Backspace count={14} delay={1000}/>
            chilling out
            <br/>

        </Typist>
    </div>
);

export default App;
