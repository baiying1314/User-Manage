/**
 * Created by baiying on 7/19/17.
 */
require("!style-loader!css-loader!./style.css");
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {Router, Route, hashHistory} from "react-router";
import App from "./containers/User";
import reducer from "./reducers/userOperate";
import user from "./middlewares/user";

const middleware = applyMiddleware(user);
const store = createStore(reducer, middleware);

render(<Provider store={store}>
    <Router history={hashHistory}>
        <Route path='/' component={App}></Route>
    </Router>
</Provider>, document.getElementById('app'));