import React from "react";
import s from "../../Dialogs.module.css";

const MessageBox = () => {
  return (
    <div className={s.mainMessageBox + " " + s.taRight}>
      <div className={s.messageDt}>
        <div className={s.messageInnerDt}>
          <p>1</p>
        </div>
        <span>Sat, Aug 23, 1:08 PM</span>
      </div>
      <div className={s.messgUsrImg}>
        <img src={"./img/user.png"} alt="" />
      </div>
    </div>
  );
};
export default MessageBox;
