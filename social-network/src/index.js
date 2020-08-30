import React from "react";
import store from "./redux/redux_store";
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let renderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                store={store}
                dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


renderTree(store.getState());

store.subscribe(() => {
    renderTree(store.getState())
});

serviceWorker.unregister();