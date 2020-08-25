import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./dialog_items/DialogItem";
import Message from "./messages/Messages";

const Dialogs = (props) => {

    let messagesElements = props.state.messages.map(
        message => <Message message={message.message}/>
    );

    let dialogsElements = props.state.dialogs.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id}/>
    );

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;