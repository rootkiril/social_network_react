import React from "react";
import s from "./Content.module.css";
import { Route} from "react-router-dom";
import Profiles from "./Profiles/Profiles";
import Dialogs from "./Dialogs/Dialogs";

const Content = () => {
  return (
      <div className={s.mainSection}>
        <Route path="/profiles" component={Profiles} />
        <Route path="/dialogs" component={Dialogs} />
      </div>
  );
};
export default Content;
