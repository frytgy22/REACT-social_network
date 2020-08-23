import React from "react";
import MyPosts from "./my_posts/MyPosts";
import ProfileInfo from "./profile_info/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>

            <MyPosts/>
        </div>
    )
}
export default Profile;