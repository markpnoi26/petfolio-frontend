import React from "react";
import ReactDOM from "react-dom";
import App from 'App'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/index'
import thunk from 'redux-thunk'
import "assets/scss/material-kit-react.scss?v=1.8.0";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk)),
);


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);
