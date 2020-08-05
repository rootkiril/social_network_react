import React from "react";
import s from "./Content.module.css";
import {Route} from "react-router-dom";
import Profiles from "./Profiles/Profiles";
import Dialogs from './Dialogs/Dialogs';
import Profile from "./Profile/Profile"

const Content = (props) => {
    return (
        <div className={s.mainSection}>
            <Route path="/profiles" render={() => <Profiles/>}/>
            <Route path="/dialogs" render={() => <Dialogs
                state={props.state.dialogsPage}/>}
            />
            <Route path="/profile" render={() => <Profile
                state={props.state.profilePage}/>}
            />
        </div>
    );
};
export default Content;