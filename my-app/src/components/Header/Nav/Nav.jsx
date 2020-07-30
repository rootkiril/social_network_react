import React from "react";
import s from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={s.navigation}>
            <ul>
                <li>
                    <a href="/index" title="Home">
                  <span>
                    <img src={"./img/home.png"} alt="Home" />
                  </span>
                        Home
                    </a>
                </li>
                {/*<li>*/}
                {/*    <a href="#?" title="Companies">*/}
                {/*  <span>*/}
                {/*    <img src={"./img/companies.png"} alt="Companies" />*/}
                {/*  </span>*/}
                {/*        Companies*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="#?" title="Projects">*/}
                {/*  <span>*/}
                {/*    <img src={"./img/projects.png"} alt="Projects" />*/}
                {/*  </span>*/}
                {/*        Projects*/}
                {/*    </a>*/}
                {/*</li>*/}
                <li>
                    <a href="/profiles" title="Profiles">
                  <span>
                    <img src={"./img/profiles.png"} alt="Profiles" />
                  </span>
                        Profiles
                    </a>
                </li>
                {/*<li>*/}
                {/*    <a href="#?" title="Jobs">*/}
                {/*  <span>*/}
                {/*    <img src={"./img/jobs.png"} alt="Jobs" />*/}
                {/*  </span>*/}
                {/*        Jobs*/}
                {/*    </a>*/}
                {/*</li>*/}
                <li>
                    <a href="/dialogs" title="Dialogs">
                  <span>
                    <img src={"./img/dialogs.png"} alt="Dialogs" />
                  </span>
                        Dialogs
                    </a>
                </li>
                <li>
                    <a href="/notification" title="Notification">
                  <span>
                    <img src={"./img/notification.png"} alt="Notification" />
                  </span>
                        Notification
                    </a>
                </li>
            </ul>
        </nav>
    )
}
export default Nav