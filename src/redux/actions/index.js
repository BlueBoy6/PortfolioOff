 import {NAVIGATION, FAKE} from "./actions-types"
 import productionsResume from "../../data/productionsResume.json"

 export function topMsgAction(name){
    return function(dispatch){
        dispatch({
            type : NAVIGATION.TOPMSG_ACTION,
            payload : name.split('')
        });
    }
 };

export function productionsResumeHead(){
    return function(dispatch){
        dispatch({
            type : NAVIGATION.MY_PRODUCTIONS,
            payload : productionsResume
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


