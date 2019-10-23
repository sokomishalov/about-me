import React from 'react'
import "./contacts.css"
import {Button, Card, Tooltip} from "antd"
import {EM_PAGE, FB_PAGE, GH_PAGE, IG_PAGE, TG_PAGE, VK_PAGE} from "../../util/consts/consts"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebookF, faGithub, faInstagram, faTelegram, faVk} from "@fortawesome/free-brands-svg-icons"
import _ from "lodash"
import {faEnvelope, faFilePdf} from "@fortawesome/free-solid-svg-icons";
import {downloadResource, openPage} from "../../util/window/window";
import CV from "../../images/cv.pdf"

const PIC_SIZE = 250;

const SOCIALS = [
    {
        icon: faFilePdf,
        color: "rgba(43,43,43,0.67)",
        tip: "My CV",
        onClick: async () => await downloadResource(CV, "sokomishalov-cv.pdf"),
    },
    {
        icon: faFacebookF,
        color: "#3b5998",
        tip: "My facebook account",
        onClick: () => openPage(FB_PAGE),
    },
    {
        icon: faVk,
        color: "#4c75a3",
        tip: "My vk account",
        onClick: () => openPage(VK_PAGE),
    },
    {
        icon: faInstagram,
        color: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
        tip: "My instagram account",
        onClick: () => openPage(IG_PAGE),
    },
    {
        icon: faTelegram,
        color: "#0088cc",
        tip: "My telegram contact",
        onClick: () => openPage(TG_PAGE),
    },
    {
        icon: faGithub,
        color: "#333",
        tip: "My github account",
        onClick: () => openPage(GH_PAGE),
    },
    {
        icon: faEnvelope,
        color: "rgba(43,43,43,0.67)",
        tip: "Send email",
        onClick: () => openPage(EM_PAGE),
    },
]

const Contacts = () => (
    <div className="contacts">
        <div>Contacts</div>
        <div className="contacts-content">
            <Card hoverable
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
                    <Tooltip title={s["tip"]} placement="right">
                        <Button shape="circle"
                                size="large"
                                className="contacts-socials-button"
                                style={{background: s["color"]}}
                                onClick={s["onClick"]}>
                            <FontAwesomeIcon icon={s["icon"]}/>
                        </Button>
                    </Tooltip>
                ))}
            </div>
        </div>
    </div>
);

export default Contacts