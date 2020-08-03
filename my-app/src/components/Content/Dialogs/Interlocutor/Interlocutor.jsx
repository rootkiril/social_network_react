import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Dialogs.module.css";



const Interlocutor = (props) => {
  return (
    <li>
      <NavLink
        to={"/dialogs/" + props.id}
        className={s.usrMsgDetails}
        activeClassName={s.active}
      >
        <div className={s.usrMsImg}>
          <img src={"./img/user2.jpg"} alt="User" />
          <span className={s.msgStatus} />
        </div>
        <div className={s.usrMgInfo}>
          <h3>{props.username}</h3>
          <p>Last message blabla</p>
        </div>
        <span className={s.postedTime}>1:55 PM</span>
        <span className={s.msgNotifc}>1</span>
      </NavLink>
    </li>
  );
};

export default Interlocutor;
