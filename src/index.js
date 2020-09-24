import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from "redux";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Reducer from './Reducers/Reducer';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
function configStore() {
  return createStore(
    Reducer,
    composeEnhancer(applyMiddleware(thunk)))
}

const store = configStore()
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
