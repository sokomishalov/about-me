import React from 'react'
import "./contacts.css"
import {Button, Card} from "antd"
import {EM_PAGE, FB_PAGE, GH_PAGE, IG_PAGE, TG_PAGE, VK_PAGE} from "../../util/consts/consts"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebookF, faGithub, faInstagram, faTelegram, faVk} from "@fortawesome/free-brands-svg-icons"
import _ from "lodash"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const PIC_SIZE = 200;

const SOCIALS = [
    {
        icon: faFacebookF,
        color: "#3b5998",
        url: FB_PAGE
    },
    {
        icon: faVk,
        color: "#4c75a3",
        url: VK_PAGE
    },
    {
        icon: faInstagram,
        color: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
        url: IG_PAGE
    },
    {
        icon: faTelegram,
        color: "#0088cc",
        url: TG_PAGE
    },
    {
        icon: faGithub,
        color: "#333",
        url: GH_PAGE
    },
    {
        icon: faEnvelope,
        color: "rgba(43,43,43,0.67)",
        url: EM_PAGE
    },
]

const Contacts = () => {

    const openPage = (url) => window.open(url, "_blank")

    return (
        <div className="contacts">
            <Card className="contacts-card"
                  hoverable
                  style={{width: PIC_SIZE}}
                  onClick={() => openPage(GH_PAGE)}
                  cover={
                      <img alt=""
                           width={PIC_SIZE}
                           height={PIC_SIZE}
                           src={`${GH_PAGE}.png?size=${PIC_SIZE}`}/>
                  }>
                <Card.Meta title="sokomishalov" description="github.com"/>
            </Card>
            <div className="contacts-socials">
                {_.map(SOCIALS, s => (
                    <Button shape="circle"
                            size="large"
                            className="contacts-socials-button"
                            style={{background: s["color"]}}
                            onClick={() => openPage(s["url"])}>
                        <FontAwesomeIcon icon={s["icon"]}/>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Contacts