import React from "react";
import s from "../../Dialogs.module.css"
const Interlocutor = () => {
    return (
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
    )
}

export default Interlocutor