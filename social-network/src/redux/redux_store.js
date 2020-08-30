import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer
});

let store = createStore(reducers);

export default store;