import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = () => {
  let dialogsData = [
    {id: '1', username: 'Kiril'},
    {id: '2', username: 'Sasha'},
    {id: '3', username: 'Ivan'},
  ]
  let messageData = [
    {id: '1', date: '12.06.2020', message: 'Philosophiae pullum etsi ut adiunxit'},
    {id: '2', date: '13.06.2020', message: 'Voluptatem oblivisci enim duo nostra'},
    {id: '3', date: '14.06.2020', message: 'Tecum et est doctissimos quid'},
  ]
  
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
                      <i className="las la-cog" />
                    </a>
                  </li>
                  <li>
                    <a href="#?" title="">
                      <i className="las la-ellipsis-v" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className={s.messagesList}>
                <ul>
                  <Interlocutor id={dialogsData[0].id} username={dialogsData[0].username}/>
                  <Interlocutor id={dialogsData[1].id} username={dialogsData[1].username}/>
                  <Interlocutor id={dialogsData[2].id} username={dialogsData[2].username}/>
                </ul>
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
                  {/* Message here */}
                  <MessageBox id={messageData[0].id} message={messageData[0].message} date={messageData[0].date}/>
                  <MessageBox id={messageData[1].id} message={messageData[1].message} date={messageData[1].date}/>
                  <MessageBox id={messageData[2].id} message={messageData[2].message} date={messageData[2].date}/>
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
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

const Interlocutor = (props) => {
  return (
    <li>
      <NavLink
        to={"/dialogs/" + props.id}
        className={s.usrMsgDetails}
        activeClassName={s.active}
      >
        <div className={s.usrMsImg}>
          <img src={"./img/user.png"} alt="User" />
          <span className={s.msgStatus} />
        </div>
        <div className={s.usrMgInfo}>
          <h3>{props.username}</h3>
          <p>Lorem ipsum dolor</p>
        </div>
        <span className={s.postedTime}>1:55 PM</span>
        <span className={s.msgNotifc}>1</span>
      </NavLink>
    </li>
  );
};

const MessageBox = (props) => {
  return (
    <div className={s.mainMessageBox + " " + s.taRight}>
      <div className={s.messageDt}>
        <div className={s.messageInnerDt}>
          <p>{props.message}</p>
        </div>
        <span>Sat, Aug 23, 1:08 PM</span>
      </div>
      <div className={s.messgUsrImg}>
        <img src={"./img/user.png"} alt="" />
      </div>
    </div>
  );
};
