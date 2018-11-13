import { combineReducers } from 'redux';
import {fakeActionReducer}  from './pages-reducer'
import {topMsgUrlSplited}  from './navigation-reducer'


// REDUCERS 

const rootReducer = combineReducers({
    fakeActionReducer: fakeActionReducer,
    topMsgUrlSplitedReducer: topMsgUrlSplited
});

export default rootReducer;

