import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'https://storage.picsave.pp.ua/download/0/3865'} alt='logo'/>
            </div>

            <div className={classes.descriptionBlock}>
                description
            </div>
        </div>
    )
}
export default ProfileInfo;