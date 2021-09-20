import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
    // Add additional reducers here
    auth: authReducer
});