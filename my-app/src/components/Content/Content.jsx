import React from "react";
import s from "./Content.module.css";
import {Route, BrowserRouter} from "react-router-dom";
import Profiles from "./Profiles/Profiles";
import Dialogs from "./Dialogs/Dialogs";

const Content = () => {
    return (
        <div className={s.mainSection}>
            <BrowserRouter>
                <Route path="/profiles"> <Profiles/></Route>
                <Route path="/dialogs"> <Dialogs/></Route>
            </BrowserRouter>
        </div>
    )
}
export default Content