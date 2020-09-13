import React from "react";
import classes from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props ) => {

    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src={'https://storge.pic2.me/c/1360x800/857/macro%20wallpaper%2046.jpg'} alt='logo'/>
            </div>

            <div className={classes.descriptionBlock}>
                <img alt={'photo'} src={props.profile.photos.large}/>
                description
            </div>
        </div>
    )
}
export default ProfileInfo;