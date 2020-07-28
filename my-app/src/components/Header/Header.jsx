import React from "react";
import s from "./Header.module.css";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import SearchBar from "./SearchBar/SearchBar";
import UserAccount from "./UserAccount/UserAccount";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className={s.headerData}>
                    <Logo/>
                    <SearchBar/>
                    <Nav/>
                    <UserAccount/>
                </div>
            </div>
        </header>
    );
};

export default Header;
