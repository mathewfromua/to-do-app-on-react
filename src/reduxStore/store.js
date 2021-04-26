import { createStore } from 'redux';
import {counterReducer} from "./counter/reducer";
import {taskReducer} from "./task/reducer";
import { combineReducers } from 'redux';

const reducers = combineReducers({counterReducer, taskReducer})
console.log(reducers)

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__());
