import {NAVIGATION} from "../actions/actions-types"


// reducer pour le message en header
export function topMsgUrlSplited (state=[], action){
    switch(action.type){
        case NAVIGATION.TOPMSG_ACTION : return action.payload;
        default: return state
    }
}

// reducer pour les titre et résumé pour la partie productions
export function productionsResumeReducer (state=[], action){
    switch(action.type){
        case NAVIGATION.MY_PRODUCTIONS : return action.payload;
        default: return state
    }
}

