import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Dialogs from "./components/dialogs/Dialogs";
import Profile from "./components/profile/Profile";
import {Route} from "react-router";

const App = (props) => {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
                <Route
                    path={'/dialogs'}
                    render={() => <Dialogs state={props.state.messagesPage}/>}
                />
                <Route
                    path={'/profile'}
                    render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
            </div>
        </div>
    );
}

export default App;

