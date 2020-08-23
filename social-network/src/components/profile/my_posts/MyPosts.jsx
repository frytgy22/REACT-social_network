import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";


const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div>
                New post
            </div>
            <div className={classes.posts}>
                <Post message={'hello'} likesCount={'0'}/>
                <Post message={'it\'s my first post'} likesCount={'12'}/>
                <Post message={'hello!'} likesCount={'0'}/>
                <Post message={'cool'} likesCount={'10'}/>
            </div>
        </div>

    )
}
export default MyPosts;