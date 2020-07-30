import React from "react";
import s from "../Dialogs.module.css"

const ListDialogs = () => {
    return (
        <div className={"col-lg-4 col-md-12 " + s.noPdd}>
            <div className={s.msgList}>
                <div className={s.msgTitle}>
                    <h3>Dialogs</h3>
                    <ul>
                        <li><a href="#1" title=""><i className="las la-cog"/></a></li>
                        <li><a href="#1" title=""><i className="las la-ellipsis-v"/></a></li>
                    </ul>
                </div>
                <div className={s.messagesList}>
                    <ul>
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
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ListDialogs