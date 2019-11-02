import React from 'react'
import "./common.css"
import Typist from "react-typist"
import { GH_PAGE, USERNAME } from "../../util/consts/consts"
import _ from "lodash"
import { getMyAge } from "../../util/date/date";
import { getColorByLanguage } from "../../util/github/github";

const Common = ({onTypistDone = _.noop}) => (
    <div className="common">
        <Typist startDelay={ 1500 }
                avgTypingDelay={ 45 }
                cursor={ {hideWhenDone: true} }
                onTypingDone={ onTypistDone }>
                <span>
                    Hi!
                </span>

            <br/>
            <Typist.Delay ms={ 500 }/>

            <span>
                    My name is <span className="name">Mikhael Sokolov </span> aka&nbsp;
                <span className="github-link" onClick={ () => window.open(GH_PAGE, "_blank") }>
                        { USERNAME }
                    </span>
                </span>

            <br/>
            <Typist.Delay ms={ 500 }/>

            <span>
                Software engineer, mostly
                <span style={ {color: getColorByLanguage("Kotlin")} }> Kotlin</span>/
                <span style={ {color: getColorByLanguage("Java")} }>Java</span>/
                <span style={ {color: getColorByLanguage("JavaScript")} }>JS</span>/
                <span style={ {color: getColorByLanguage("Dart")} }>Dart</span>/
                <span>etc.</span>
            </span>
            <br/>

            <Typist.Delay ms={ 500 }/>
            <span>
                    I am { getMyAge() } y.o., born and live in Moscow, Russia
                </span>
            <br/>

            <Typist.Delay ms={ 500 }/>
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