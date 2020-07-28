import React from "react";
import s from "./Content.module.css";
import Profiles from "./Profiles/Profiles";
import {Route, BrowserRouter} from "react-router-dom";

const Content = () => {
    return (
        <div className={s.mainSection}>
            <BrowserRouter>
                <Route path="/profiles"> <Profiles/></Route>
            </BrowserRouter>
        </div>
    )
}
export default Content