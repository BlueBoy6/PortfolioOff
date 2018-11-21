import {FAKE, NAVIGATION} from "../actions/actions-types"

export function fakeActionReducer(state=[], action){
    switch(action.type){
        case FAKE.ACTION : return action.payload;
        default: return state
    }
}


// reducer pour les titre et résumé pour la partie productions
export function selectionResumeReducer (state=[], action){
    switch(action.type){
        case NAVIGATION.SELECTED_VIGNET : return action.payload;
        default: return state
    }
}