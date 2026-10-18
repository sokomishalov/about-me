import React, {useEffect, useState} from 'react'
import "./common.scss"
import Typist from "react-typist-component"
import {GH_PAGE, USERNAME} from "../../util/consts/consts"
import {getMyAge} from "../../util/date/date";
import {languageColor} from "../../util/github/github";

const prefersReducedMotion = () =>
    typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

// Rendered both inside <Typist> (animated) and as plain markup (skipped).
// Typist walks nested elements, but not custom components, so this must stay a plain function.
const renderIntro = (animated) => {
    const delay = animated ? <Typist.Delay ms={ 250 }/> : null

    return (
        <>
            <span>
                Hey!
            </span>

            <br/>
            { delay }

            <span>
                My name is <span className="name">Mikhael Sokolov </span> aka&nbsp;
                <a className="github-link" href={ GH_PAGE } target="_blank" rel="noreferrer">
                    { USERNAME }
                </a>
                .
            </span>

            <br/>
            { delay }

            <span>
                Software engineer.&nbsp;
                <span style={ { color: languageColor("Java") } }>JVM</span>/
                <span style={ { color: languageColor("JavaScript") } }>JS</span>/
                <span style={ { color: languageColor("Dart") } }>Dart</span>/
                <span style={ { color: languageColor("Rust") } }>Rust</span>/
                <span style={ { color: "white" } }>etc.</span>
            </span>
            <br/>

            { delay }
            <span>I am { getMyAge() } y.o., born in Moscow 🇷🇺, based in João Pessoa 🇧🇷.</span>
            <br/>

            { delay }
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
            { animated
                ? <span className="fan-of">* drinking vodka<Typist.Backspace count={ 14 } delay={ 500 }/>chilling</span>
                : <span className="fan-of">* chilling</span> }
            <br/>
        </>
    )
}

const Common = ({ onIntroDone = () => {} }) => {
    const [animated, setAnimated] = useState(() => !prefersReducedMotion())

    useEffect(() => {
        if (!animated) {
            onIntroDone()
            return
        }
        const skip = () => setAnimated(false)
        window.addEventListener("keydown", skip, { once: true })
        window.addEventListener("pointerdown", skip, { once: true })
        return () => {
            window.removeEventListener("keydown", skip)
            window.removeEventListener("pointerdown", skip)
        }
    }, [animated, onIntroDone])

    return (
        <section className="common">
            { animated
                ? (
                    <Typist startDelay={ 500 }
                            typingDelay={ 25 }
                            cursor="|"
                            onTypingDone={ () => setAnimated(false) }>
                        { renderIntro(true) }
                    </Typist>
                )
                : renderIntro(false) }
            { animated && <div className="common-skip-hint" aria-hidden="true">press any key or click to skip</div> }
        </section>
    );
};

export default Common;
