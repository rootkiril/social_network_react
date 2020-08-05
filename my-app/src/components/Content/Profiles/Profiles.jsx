import React from "react";
import s from "./Profiles.module.css"

const Profiles = () => {
    return (
        <div className="container">
            <div className={s.profilesTitle}>
                <h3>All Profiles</h3>
            </div>
            <div className={s.profilesList}>
                <div className="row">
                </div>
            </div>
        </div>
    );
};
export default Profiles