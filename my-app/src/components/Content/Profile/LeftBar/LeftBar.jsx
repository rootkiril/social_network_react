import React from "react";
import s from "./LeftBar.module.css"

const LeftBar = () => {
    return (
        <div className="col-lg-3">
            <div className={s.mainLeftSidebar}>
                <div className={s.userProfile}>
                    <div className={s.userProImg}
                         style={{backgroundImage: "url('/img/user2.jpg')"}}/>
                    <div className={s.userTabSec}>
                        <h3>Harlinskyi Kiril</h3>
                        <div className={s.starDescp}>
                            <span>Graphic Designer at Self Employed</span>
                        </div>
                    </div>
                    <div className={s.userProStatus}>
                        <ul className={s.flwHr}>
                            <li>
                                <a href="#1" className={s.flww}>
                                    <i className="la la-plus"/>
                                    Follow
                                </a>
                            </li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                                <a href="#1" className={s.msg}>
                                    <i className="las la-envelope"/>
                                    Message</a>
                            </li>
                        </ul>
                        <ul className={s.flwStatus}>
                            <li><span>Following</span><b>34</b></li>
                            <li><span>Followers</span><b>12</b></li>
                        </ul>
                    </div>
                    <ul className={s.socialLinks}>
                        <li><a href="#1" title=""><i
                            className="la la-globe"/> www.example.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default LeftBar