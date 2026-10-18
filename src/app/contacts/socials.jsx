import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGithub, faInstagram, faLinkedin, faTelegram, faVk} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {CV_PAGE, EM_PAGE, FB_PAGE, GH_PAGE, IG_PAGE, LI_PAGE, TG_PAGE, VK_PAGE} from "../../util/consts/consts";
import React from "react";

export const SOCIALS = [
    {
        icon: <FontAwesomeIcon icon={ faLinkedin }/>,
        color: "#2867B2",
        tip: "My LinkedIn account",
        href: LI_PAGE,
    },
    {
        icon: <FontAwesomeIcon icon={ faGithub }/>,
        color: "#333",
        tip: "My Github account",
        href: GH_PAGE,
    },
    {
        icon: <FontAwesomeIcon icon={ faEnvelope }/>,
        color: "rgba(43,43,43,0.67)",
        tip: "Send e-mail",
        href: EM_PAGE,
    },
    {
        icon: "CV",
        color: "rgba(43,43,43,0.67)",
        tip: "My CV",
        href: CV_PAGE,
    },
    {
        icon: <FontAwesomeIcon icon={ faTelegram }/>,
        color: "#0088cc",
        tip: "My Telegram contact",
        href: TG_PAGE,
    },
    {
        icon: <FontAwesomeIcon icon={ faInstagram }/>,
        color: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
        tip: "My Instagram account",
        href: IG_PAGE,
    },
    {
        icon: <FontAwesomeIcon icon={ faFacebookF }/>,
        color: "#3b5998",
        tip: "My Facebook account",
        href: FB_PAGE,
    },
    {
        icon: <FontAwesomeIcon icon={ faVk }/>,
        color: "#4c75a3",
        tip: "My VK account",
        href: VK_PAGE,
    },
]
