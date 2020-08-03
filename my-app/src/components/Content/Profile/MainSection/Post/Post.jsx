import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.postBar}>
            <div className={s.postTopbar}>
                <div className={s.usyDt}>
                    <span className={s.usyAvatar} style={{backgroundImage: "url('./img/user2.jpg')"}}/>
                    <div className={s.usyName}>
                        <h3>{props.username}</h3>
                        <span><i className="las la-clock"></i>{props.postDate}</span>
                    </div>
                </div>
                <div className={s.edOpts}>
                    <a href="#1" className={s.edOptsOpen}>
                        <i className="la la-ellipsis-v"/>
                    </a>
                    <ul className={s.edOptions}>
                        <li><a href="#1">Edit Post</a></li>
                        <li><a href="#1">Unsaved</a></li>
                        <li><a href="#1">Unbid</a></li>
                        <li><a href="#1">Close</a></li>
                        <li><a href="#1">Hide</a></li>
                    </ul>
                </div>
            </div>
            <div className={s.jobDescp}>
                <p>{props.postText}</p>
            </div>
            <div className={s.jobStatusBar}>
                <div className={s.jobStatusBar}>
                    <ul className={s.likeCom}>
                        <li>
                            <a href="#"><i className="las la-heart"/>{props.likeCounter}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Post