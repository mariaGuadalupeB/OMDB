import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import Main from "./containers/Main";
import store from "./state/store";
import './index.css';
import { Route } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route to="/" component={Main} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("app")
);

