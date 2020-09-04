import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {Route} from "react-router";
import DialogsContainer from "./components/dialogs/DialogsContainer";

const App = (props) => {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
                <Route
                    path={'/dialogs'}
                    render={() => <DialogsContainer/>}
                />
                <Route
                    path={'/profile'}
                    render={() => <Profile/>}
                />
            </div>
        </div>
    );
}

export default App;

