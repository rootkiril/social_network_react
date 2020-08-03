import React from "react";
import s from "../Profile.module.css"
import Post from "./Post/Post"

const MainSection = () => {
    let postData = [
        {
            id: "1",
            username: "Kiril",
            postText: "Sequuntur proditorem esse melius magnarum",
            postDate: "12.10.2020",
            likeCounter: "12"
        },
        {
            id: "2",
            username: "Kiril",
            postText: "Flagitiosum et ipse diodorus quid",
            postDate: "13.08.2020",
            likeCounter: "15"
        },
        {
            id: "3",
            username: "Kiril",
            postText: "Flagitiosum et ipse diodorus quid",
            postDate: "13.08.2020",
            likeCounter: "7"
        }
    ];

    let PostList = postData.map((post) => (
        <Post id={post.id} username={post.username} postText={post.postText} postDate={post.postDate}
              likeCounter={post.likeCounter}/>
    ));
    return (
        <div className="col-lg-9">
            <div className={s.mainWsSec}>
                <div className={s.productFeedTab}>
                    <div className={s.postsSection}>
                        {PostList}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainSection