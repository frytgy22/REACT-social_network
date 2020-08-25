import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";

let newPostElement = React.createRef();

let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
}

const MyPosts = (props) => {
    debugger;
    let postsElements = props.posts.map(
        post => <Post message={post.message} likesCount={post.likesCount}/>
    );

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div>
                New post
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts;