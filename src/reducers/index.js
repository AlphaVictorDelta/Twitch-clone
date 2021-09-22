import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
    // Add additional reducers here
    auth: authReducer,
    form: formReducer
});