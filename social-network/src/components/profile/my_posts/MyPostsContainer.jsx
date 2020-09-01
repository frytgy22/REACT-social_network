import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
                 addPost={addPost}/>
    )
}
export default MyPostsContainer;