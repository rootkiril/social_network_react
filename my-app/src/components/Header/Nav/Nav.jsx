import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <nav className={s.navigation}>
      <ul>
        <li>
          <NavLink to="/index" title="Home" activeClassName={s.active}>
            <span>
              <img src={"./img/home.png"} alt="Home" />
            </span>
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profiles" title="Profiles" activeClassName={s.active}>
            <span>
              <img src={"./img/profiles.png"} alt="Profiles" />
            </span>
            <p>Profiles</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" title="Dialogs" activeClassName={s.active}>
            <span>
              <img src={"./img/dialogs.png"} alt="Dialogs" />
            </span>
            <p>Dialogs</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/notification" title="Notification" >
            <span>
              <img src={"./img/notification.png"} alt="Notification" />
            </span>
            <p>Notification</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
