import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}> {props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="User1" id="1"/>
                <DialogItem name="User2" id="2"/>
                <DialogItem name="User3" id="3"/>
                <DialogItem name="User4" id="4"/>
                <DialogItem name="User5" id="5"/>
                <DialogItem name="User6" id="6"/>
            </div>

            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="Hello"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
}
export default Dialogs;