import { combineReducers } from 'redux';
import {fakeActionReducer, selectionResumeReducer}  from './pages-reducer'

import {topMsgUrlSplited , productionsResumeReducer}  from './navigation-reducer'


// REDUCERS 

const rootReducer = combineReducers({
    fakeActionReducer: fakeActionReducer,
    topMsgUrlSplitedReducer: topMsgUrlSplited,
    productionsResumeReducer : productionsResumeReducer,
    selectionResumeReducer : selectionResumeReducer
});

export default rootReducer;

