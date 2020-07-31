import React from "react";
import s from "./Dialogs.module.css";
import ListDialogs from "./ListDialogs/ListDialogs";
import ChatDialog from "./ChatDialog/ChatDialog";

const Dialogs = () => {
  return (
    <div className="container">
      <div className={s.messagesSec}>
        <div className="row">
          <ListDialogs />
          <ChatDialog />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
