import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./user_reducer";
import authReducer from "./auth_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;