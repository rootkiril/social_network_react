import React from "react";
import s from "../Dialogs.module.css";

const MessageBox = (props) => {
    return (
      <div className={s.mainMessageBox + " " + s.taRight}>
        <div className={s.messageDt}>
          <div className={s.messageInnerDt}>
            <p>{props.message}</p>
          </div>
          <span>{props.date}</span>
        </div>
        <div className={s.messgUsrImg}>
          <img src={"./img/user2.jpg"} alt="Avatar" />
        </div>
      </div>
    );
  };

  export default MessageBox