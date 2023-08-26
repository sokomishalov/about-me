import React from 'react'
import "./contacts.css"
import {Button, Card, Tooltip} from "antd"
import {GH_PAGE} from "../../util/consts/consts"
import _ from "lodash"
import {openPage} from "../../util/window/window";
import {SOCIALS} from "./socials";

const PIC_SIZE = 300;

const Contacts = () => (
    <div className="contacts">
        <div>Contacts</div>
        <div className="contacts-content">
            <Card hoverable
                  style={ { width: PIC_SIZE } }
                  onClick={ () => openPage(GH_PAGE) }
                  cover={
                      <img alt=""
                           width={ PIC_SIZE }
                           height={ PIC_SIZE }
                           src={ `${ GH_PAGE }.png?size=${ PIC_SIZE }` }/>
                  }>
                <Card.Meta title="sokomishalov" description="github.com"/>
            </Card>
            <div className="contacts-socials">
                { _.map(SOCIALS, s => (
                    <Tooltip key={ s["tip"] }
                             title={ s["tip"] }
                             placement="right">
                        <Button shape="circle"
                                size="large"
                                type="text"
                                className="contacts-socials-button"
                                style={ { background: s["color"] } }
                                onClick={ s["onClick"] }>
                            { s["icon"] }
                        </Button>
                    </Tooltip>
                )) }
            </div>
        </div>
    </div>
)

export default Contacts