import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsYNNQYp0Wza32_1r9i8wZjp2gtC_A27zoLg&usqp=CAU'}
                alt={'logo'}/>
            {props.message}
            <div>
                <span className={'heard'}>❤ </span>{props.likesCount}
            </div>
        </div>
    )
}
export default Post;