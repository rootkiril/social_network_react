import React from "react";
import s from "../Profile.module.css"
import Post from "./Post/Post"

const MainSection = (props) => {
    let PostList = props.state.postData.map((post) => (
        <Post id={post.id}
              username={post.username}
              postText={post.postText}
              postDate={post.postDate}
              likeCounter={post.likeCounter}
        />
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