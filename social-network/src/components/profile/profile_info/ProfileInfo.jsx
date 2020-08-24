import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'https://storge.pic2.me/c/1360x800/857/macro%20wallpaper%2046.jpg'} alt='logo'/>
            </div>

            <div className={classes.descriptionBlock}>
                description
            </div>
        </div>
    )
}
export default ProfileInfo;