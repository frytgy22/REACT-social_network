import React from "react";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyNwpePjqCgwt-LwpNh04UWs4nrX_tg9kooA&usqp=CAU'
                alt='logo'/>
        </header>
    )
}
export default Header;