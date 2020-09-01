import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state= props.store.getState().messagesPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <Dialogs pdateNewMessageBody={onNewMessageChange}
                 messagesPage={state}
                 sendMessage={onSendMessageClick}/>
    )
}
export default DialogsContainer;