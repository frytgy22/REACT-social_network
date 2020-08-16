import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div>
                New post
            </div>
            <Post message={'hello'}/>
            <Post message={'it\'s my first post'}/>
            <Post message={'hello!'}/>
            <Post message={'cool'}/>
        </div>

    )
}
export default MyPosts;