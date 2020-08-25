import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Dialogs from "./components/dialogs/Dialogs";
import Profile from "./components/profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom'

const App = (props) => {

    return (
        <BrowserRouter>
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
                        render={() => <Profile state={props.state.profilePage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

