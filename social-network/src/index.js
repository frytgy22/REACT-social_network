import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {id: 1, message: 'hello', likesCount: 0},
    {id: 2, message: 'it\'s my first post', likesCount: 10},
    {id: 3, message: 'hello!', likesCount: 12},
    {id: 4, message: 'cool', likesCount: 0}
];

let dialogsData = [
    {id: 1, name: 'User1'},
    {id: 2, name: 'User2'},
    {id: 3, name: 'User3'},
    {id: 4, name: 'User4'},
    {id: 5, name: 'User5'},
    {id: 6, name: 'User6'}
];

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'}
];

ReactDOM.render(
    <React.StrictMode>
        <App
            posts={postsData}
            dialogs={dialogsData}
            messages={messagesData}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
