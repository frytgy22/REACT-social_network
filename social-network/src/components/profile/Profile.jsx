import React from "react";
import MyPosts from "./my_posts/MyPosts";
import ProfileInfo from "./profile_info/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>

            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;