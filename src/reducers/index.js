import dealerListReducer from './dealersList';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    dealerList: dealerListReducer,
});

export default allReducers;
