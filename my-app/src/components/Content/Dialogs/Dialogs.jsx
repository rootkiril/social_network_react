import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className="container">
            <div className={s.messagesSec}>
                <div className="row">
                    <div className={"col-lg-4 col-md-12" + s.noPdd}>
                        <div className={s.msgList}>
                            <div className={s.msgTitle}>
                                <h3>Dialogs</h3>
                                <ul>
                                    <li><a href="#1" title=""><i className="las la-cog" /></a></li>
                                    <li><a href="#1" title=""><i className="las la-ellipsis-v" /></a></li>
                                </ul>
                            </div>
                            <div className={s.messagesList}>
                                <ul>
                                    <li className={s.active}>
                                        <div className={s.usrMsgDetails}>
                                            <div className={s.usrMsImg}>
                                                <img src={"./img/user.png"} alt="User"/>
                                                <span className={s.msgStatus}/>
                                            </div>
                                            <div className={s.usrMgInfo}>
                                                <h3>John Doe</h3>
                                                <p>Lorem ipsum dolor</p>
                                            </div>
                                            <span className={s.postedTime}>1:55 PM</span>
                                            <span className={s.msgNotifc}>1</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={s.usrMsgDetails}>
                                            <div className={s.usrMsImg}>
                                                <img src={"./img/user.png"} alt="User"/>
                                                <span className={s.msgStatus}/>
                                            </div>
                                            <div className={s.usrMgInfo}>
                                                <h3>John Doe</h3>
                                                <p>Lorem ipsum dolor</p>
                                            </div>
                                            <span className={s.postedTime}>1:55 PM</span>
                                            <span className={s.msgNotifc}>1</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={"col-lg-8 col-md-12 " + s.pdRightNone + " " + s.pdLeftNone}>
                        <div className={s.mainConversationBox}>
                            <div className={s.messageBarHead}>
                                <div className={s.usrMsgDetails}>
                                    <div className={s.usrMsImg}>
                                        <img src={"./img/user.png"} alt="User"/>
                                    </div>
                                    <div className={s.usrMgInfo}>
                                        <h3>John Doe</h3>
                                        <p>Online</p>
                                    </div>
                                </div>
                                <a href="#1" title=""><i className="fa fa-ellipsis-v"></i></a>
                            </div>
                            <div className={s.messagesLine}>
                                <div tabIndex="0">
                                    <div dir="ltr">
                                        <div className={s.mainMessageBox + " " + s.taRight}>
                                            <div className={s.messageDt}>
                                                <div className={s.messageInnerDt}>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                                        rutrum congue leo eget malesuada. Vivamus suscipit tortor eget
                                                        felis porttitor.</p>
                                                </div>
                                                <span>Sat, Aug 23, 1:08 PM</span>
                                            </div>
                                            <div className={s.messgUsrImg}>
                                                <img src={"./img/user.png"} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="mCSB_1_scrollbar_vertical"
                                         className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical">
                                        <div className="mCSB_draggerContainer">
                                            <div id="mCSB_1_dragger_vertical" className="mCSB_dragger">
                                                <div className="mCSB_dragger_bar"></div>
                                            </div>
                                            <div className="mCSB_draggerRail"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s.messageSendArea}>
                                <form>
                                    <div className={s.mfField}>
                                        <input type="text" name="message" placeholder="Type a message here"/>
                                        <button type="submit">Send</button>
                                    </div>
                                    <ul>
                                        <li><a href="#1" title=""><i className="las la-smile" /></a></li>
                                        <li><a href="#1" title=""><i className="las la-camera" /></a></li>
                                        <li><a href="#1" title=""><i className="las la-paperclip" /></a></li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs