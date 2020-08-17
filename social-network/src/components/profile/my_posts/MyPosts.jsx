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
            <Post message={'hello'} likesCount={'0'}/>
            <Post message={'it\'s my first post'} likesCount={'12'}/>
            <Post message={'hello!'} likesCount={'0'}/>
            <Post message={'cool'} likesCount={'10'}/>
        </div>

    )
}
export default MyPosts;