import { Avatar } from "antd";
import { openPage } from "../../util/window/window";
import CV from "../../images/cv.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faInstagram, faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
import { EM_PAGE, FB_PAGE, GH_PAGE, IG_PAGE, TG_PAGE, VK_PAGE } from "../../util/consts/consts";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const SOCIALS = [
    {
        icon: <FontAwesomeIcon icon={ faFacebookF }/>,
        color: "#3b5998",
        tip: "My Facebook account",
        onClick: () => openPage(FB_PAGE),
    },
    {
        icon: <FontAwesomeIcon icon={ faVk }/>,
        color: "#4c75a3",
        tip: "My VK account",
        onClick: () => openPage(VK_PAGE),
    },
    {
        icon: <FontAwesomeIcon icon={ faInstagram }/>,
        color: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
        tip: "My Instagram account",
        onClick: () => openPage(IG_PAGE),
    },
    {
        icon: <FontAwesomeIcon icon={ faTelegram }/>,
        color: "#0088cc",
        tip: "My Telegram contact",
        onClick: () => openPage(TG_PAGE),
    },
    {
        icon: <FontAwesomeIcon icon={ faGithub }/>,
        color: "#333",
        tip: "My Github account",
        onClick: () => openPage(GH_PAGE),
    },
    {
        icon: <FontAwesomeIcon icon={ faEnvelope }/>,
        color: "rgba(43,43,43,0.67)",
        tip: "Send e-mail",
        onClick: () => openPage(EM_PAGE),
    },
    {
        icon: <Avatar style={ {backgroundColor: "rgba(43,43,43,0.67)", marginTop: -3} }>CV</Avatar>,
        color: "rgba(43,43,43,0.67)",
        tip: "My CV",
        onClick: () => openPage(CV)
    }
]