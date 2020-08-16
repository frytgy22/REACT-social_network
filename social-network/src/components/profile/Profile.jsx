import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./my_posts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>

            <div>
                <img src={'https://storage.picsave.pp.ua/download/0/3865'} alt='logo'/>
            </div>

            <MyPosts/>
        </div>
    )
}
export default Profile;