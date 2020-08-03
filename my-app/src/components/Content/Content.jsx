import React from "react";
import s from "./Content.module.css";
import { Route} from "react-router-dom";
import Profiles from "./Profiles/Profiles";
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/Profile"

const Content = () => {
  return (
      <div className={s.mainSection}>
        <Route path="/profiles" component={Profiles} />
        <Route path="/dialogs" component={Dialogs} />
        <Route path="/profile" component={Profile} />
      </div>
  );
};
export default Content;
