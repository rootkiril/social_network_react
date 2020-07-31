import React from "react";
import s from "../Dialogs.module.css";
import Interlocutor from "./Interlocutor/Interlocutor";

const ListDialogs = () => {
  return (
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
            <Interlocutor />
            <Interlocutor />
            <Interlocutor />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ListDialogs;
