import React from "react";
import s from "./UserAccount.module.css";

const UserAccount = () => {
    return (
        <div className={s.userAccount}>
            <div className={s.userInfo}>
                <img src={"./img/user.png"} alt=""/>
                <a href="#1">John</a>
            </div>
        </div>
    );
};

export default UserAccount