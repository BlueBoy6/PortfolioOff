 import {NAVIGATION, FAKE} from "./actions-types"

 export function topMsgAction(name){
    return function(dispatch){
        dispatch({
            type : NAVIGATION.TOPMSG_ACTION,
            payload : name.split('')
        });
    }
 }

export function fakeAction(fakeMsg){
    return function(dispatch){
        dispatch({
            type: FAKE.ACTION,
            payload: `FAKE ACTION TEST WITH YOUR ARG : ${fakeMsg}` 
        })
    }
}


