import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./dialog_items/DialogItem";
import Message from "./messages/Messages";


const Dialogs = (props) => {
    let state= props.messagesPage;

    let messagesElements = state.messages.map(
        message => <Message key={message.id} message={message.message}/>
    );

    let dialogsElements =state.dialogs.map(
        dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
    );

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder={'Enter your message:'}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;