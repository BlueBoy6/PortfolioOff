import {NAVIGATION} from "../actions/actions-types"

// // FONCTION DE RECUPERATION REDUCER

export function topMsgUrlSplited (state=[], action){
    switch(action.type){
        case NAVIGATION.TOPMSG_ACTION : return action.payload;
        default: return state
    }
}