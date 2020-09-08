import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>
                    <h3>Profile</h3></NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>
                    <h3>Messages</h3></NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to="/users" activeClassName={classes.activeLink}>
                    <h3>Users</h3></NavLink>
            </div>

            <div className={classes.item}><a><h3>News</h3></a></div>
            <div className={classes.item}><a><h3>Music</h3></a></div>
            <div className={classes.item}><a><h3>Settings</h3></a></div>
        </nav>
    )
}
export default Navbar;