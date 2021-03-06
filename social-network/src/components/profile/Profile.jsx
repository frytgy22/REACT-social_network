import React from "react";
import ProfileInfo from "./profile_info/ProfileInfo";
import MyPostsContainer from "./my_posts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;