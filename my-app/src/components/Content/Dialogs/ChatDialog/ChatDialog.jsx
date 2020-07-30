import React from "react";
import s from "../Dialogs.module.css"

const ChatDialog = () => {
    return (
        <div className={"col-lg-8 col-md-12 " + s.pdRightNone + " " + s.pdLeftNone + " " + s.noPdd}>
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
                    <div className={s.msgListWrapper}>
                        <div className={s.mainMessageBox + " " + s.taRight}>
                            <div className={s.messageDt}>
                                <div className={s.messageInnerDt}>
                                    <p>1</p>
                                </div>
                                <span>Sat, Aug 23, 1:08 PM</span>
                            </div>
                            <div className={s.messgUsrImg}>
                                <img src={"./img/user.png"} alt=""/>
                            </div>
                        </div>
                        <div className={s.mainMessageBox + " " + s.taRight}>
                            <div className={s.messageDt}>
                                <div className={s.messageInnerDt}>
                                    <p>2</p>
                                </div>
                                <span>Sat, Aug 23, 1:08 PM</span>
                            </div>
                            <div className={s.messgUsrImg}>
                                <img src={"./img/user.png"} alt=""/>
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
                            <li><a href="#1" title=""><i className="las la-smile"/></a></li>
                            <li><a href="#1" title=""><i className="las la-camera"/></a></li>
                            <li><a href="#1" title=""><i className="las la-paperclip"/></a></li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ChatDialog