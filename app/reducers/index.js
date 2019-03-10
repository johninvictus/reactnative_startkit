/**
 * combine all reducers here
 * */
import {combineReducers} from 'redux';
import ExampleReducer from '../reducers/ExampleReducer';

export default combineReducers({
    example: ExampleReducer
})
