import {FAKE} from "../actions/actions-types"

export function fakeActionReducer(state=[], action){
    switch(action.type){
        case FAKE.ACTION : return action.payload;
        default: return state
    }
}
