import React from "react";
import s from "../Dialogs.module.css";
import MessageBox from "./MessageBox/MessageBox";

const ChatDialog = () => {
  return (
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
              <img src={"./img/user.png"} alt="User" />
            </div>
            <div className={s.usrMgInfo}>
              <h3>John Doe</h3>
              <p>Online</p>
            </div>
          </div>
          <a href="#?" title="">
            <i className="fa fa-ellipsis-v" />
          </a>
        </div>
        <div className={s.messagesLine}>
          <div className={s.msgListWrapper}>
            <MessageBox />
            <MessageBox />
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
                  <i className="las la-smile" />
                </a>
              </li>
              <li>
                <a href="#?" title="">
                  <i className="las la-camera" />
                </a>
              </li>
              <li>
                <a href="#?" title="">
                  <i className="las la-paperclip" />
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ChatDialog;
