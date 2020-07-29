import React from "react";
import s from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={s.logo}>
            <a href="index.html">
                <img src={"./img/logo512.png"} alt="Logo" title="Logo"/>
            </a>
        </div>
    )
}
export default Logo