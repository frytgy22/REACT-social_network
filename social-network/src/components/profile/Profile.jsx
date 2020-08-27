import React from "react";
import MyPosts from "./my_posts/MyPosts";
import ProfileInfo from "./profile_info/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>

            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}
export default Profile;