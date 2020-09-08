import React from "react";
import classes from "../../users/users.module.css";
import preloader from "../../../assets/images/ball-triangle.svg";

let Preloader = ()=>{
    return(
        <div className={classes.userPhoto}>
            <img alt={'preloader'} src={preloader}/>
        </div>
    )
}

export default Preloader;