/**
 * Created by baiying on 7/19/17.
 */
require("!style-loader!css-loader!./style.css");
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {Router, Route, hashHistory} from "react-router";
import App from "./containers/App";
import reducer from "./reducers/app";

const store = createStore(reducer);

render(<Provider store={store}>
    <Router history={hashHistory}>
        <Route path='/' component={App}></Route>
    </Router>
</Provider>, document.getElementById('app'));