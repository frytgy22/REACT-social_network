import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().messagesPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }

                return <Dialogs pdateNewMessageBody={onNewMessageChange}
                                messagesPage={state}
                                sendMessage={onSendMessageClick}/>
            }}
        </StoreContext.Consumer>
    )

}
export default DialogsContainer;