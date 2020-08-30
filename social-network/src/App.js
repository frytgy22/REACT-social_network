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
                    render={() => <Dialogs store={props.store}/>}
                />
                <Route
                    path={'/profile'}
                    render={() => <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}/>}
                />
            </div>
        </div>
    );
}

export default App;

