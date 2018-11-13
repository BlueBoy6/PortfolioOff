import { combineReducers } from 'redux';
import {fakeActionReducer}  from './pages-reducer'

import {topMsgUrlSplited , productionsResumeReducer}  from './navigation-reducer'


// REDUCERS 

const rootReducer = combineReducers({
    fakeActionReducer: fakeActionReducer,
    topMsgUrlSplitedReducer: topMsgUrlSplited,
    productionsResumeReducer : productionsResumeReducer
});

export default rootReducer;

