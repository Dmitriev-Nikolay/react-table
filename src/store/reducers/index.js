import { combineReducers } from "redux";
import userReducer from './users';
import filtersReducer from './filters';

const rootReducer = combineReducers({ userReducer, filtersReducer });

export default rootReducer;