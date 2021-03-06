import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
serviceWorker.unregister();

const initState = {
    salary: 15000,
    value: []
}
const userReducer = (state = { name: 'Kong', age: 15 }, action) => {
    switch (action.type) {
        case 'SET_NAME':
            state = {
                ...state,
                name: action.payload
            }

            break;
        case 'SET_AGE':
            state = {
                ...state,
                age: action.payload
            }
            break;

        default:
            break;
    }
    return state;

}
const employeeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            state = {
                ...state,
                salary: state.salary += action.payload,
                value: [...state.value, action.payload]
            }
            break;
        case 'SUBTRACT':
            state = {
                ...state,
                salary: state.salary -= action.payload,
                value: [...state.value, (action.payload) * -1]
            }
            break;

        default:
            break;
    }
    return state;

}
const mylogger = (store) => (next) => (action) => {
    console.log("Log Action : ", action);
    next(action);
}
const store = createStore(combineReducers({emp:employeeReducer, user:userReducer }), {}, applyMiddleware(mylogger));
store.subscribe(() => {
    console.log("Update store ", store.getState());

})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));