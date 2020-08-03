import React from "react";
import s from "./UserAccount.module.css";
import {NavLink} from "react-router-dom";

const UserAccount = () => {
    return (
        <div className={s.userAccount}>
            <NavLink className={s.userInfo} to="/profile" title="User Profile"  activeClassName={s.active}>
                <div style={{backgroundImage: "url('./img/user2.jpg')"}}/>
                <span>Kiril</span>
            </NavLink>
        </div>
    );
};
export default UserAccount;