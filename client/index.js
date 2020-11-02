import React from "react";
import ReactDOM from "react-dom";
import createStore from "../src/store";
import App from "../src/app";
import routes from "../src/routes/index";

const rootElement = document.getElementById("root");

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const store = createStore(preloadedState);

const location = window.location.pathname;
ReactDOM.hydrate(<App store={store} routes={routes} location={location}/>, rootElement);