import React from "react";
import s from "./Dialogs.module.css";
import Interlocutor from "./Interlocutor/Interlocutor";
import MessageBox from "./Message/Message"

const Dialogs = (props) => {

    let DialogsInterlocutor = props.state.dialogsData.map((dialog) => (
        <Interlocutor id={dialog.id}
                      username={dialog.username}
        />
    ));
    let DialogMessage = props.state.messageData.map((message) => (
        <MessageBox id={message.id}
                    message={message.message}
                    date={message.date}
        />
    ));
    return (
        <div className="container">
            <div className={s.messagesSec}>
                <div className="row">
                    <div className={"col-lg-4 col-md-12 " + s.noPdd}>
                        <div className={s.msgList}>
                            <div className={s.msgTitle}>
                                <h3>Dialogs</h3>
                                <ul>
                                    <li>
                                        <a href="#?" title="">
                                            <i className="las la-cog"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#?" title="">
                                            <i className="las la-ellipsis-v"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className={s.messagesList}>
                                {/* Dialog List */}
                                <ul>{DialogsInterlocutor}</ul>
                                {/* End  */}
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            "col-lg-8 col-md-12 " +
                            s.pdRightNone +
                            " " +
                            s.pdLeftNone +
                            " " +
                            s.noPdd
                        }
                    >
                        <div className={s.mainConversationBox}>
                            <div className={s.messageBarHead}>
                                <div className={s.usrMsgDetails}>
                                    <div className={s.usrMsImg}>
                                        <img src={"./img/user2.jpg"} alt="User"/>
                                    </div>
                                    <div className={s.usrMgInfo}>
                                        <h3>John Doe</h3>
                                        <p>Online</p>
                                    </div>
                                </div>
                                <a href="#?" title="">
                                    <i className="fa fa-ellipsis-v"/>
                                </a>
                            </div>
                            <div className={s.messagesLine}>
                                <div className={s.msgListWrapper}>
                                    {/* Message here */}
                                    {DialogMessage}
                                    {/* End */}
                                </div>
                            </div>
                            <div className={s.messageSendArea}>
                                <form>
                                    <div className={s.mfField}>
                                        <input
                                            type="text"
                                            name="message"
                                            placeholder="Type a message here"
                                        />
                                        <button type="submit">Send</button>
                                    </div>
                                    <ul>
                                        <li>
                                            <a href="#?" title="">
                                                <i className="las la-smile"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#?" title="">
                                                <i className="las la-camera"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#?" title="">
                                                <i className="las la-paperclip"/>
                                            </a>
                                        </li>
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

export default Dialogs;