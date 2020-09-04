import React from "react";
import store from "./redux/redux_store";
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "./StoreContext";


let renderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


renderTree(store.getState());

store.subscribe(() => {
    renderTree(store.getState())
});

serviceWorker.unregister();