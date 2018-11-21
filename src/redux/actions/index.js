 import {NAVIGATION, FAKE} from "./actions-types"
 import {productionsIndex} from "../../data/content-production/productionsIndex"

 export function topMsgAction(name){
    return function(dispatch){
        dispatch({
            type : NAVIGATION.TOPMSG_ACTION,
            payload : name.split('')
        });
    }
 };

export function productionsResumeHead(resumeSelected){
    return function(dispatch){
        const justResumeForVignets = [];
        productionsIndex.forEach((item)=>{
            justResumeForVignets.push({
                id : item.id,
                title : item.title,
                coverImg : item.coverImg,
                category : item.category,
                date : item.date,
                technos : item.technos
            });
        })

        dispatch({
            type : NAVIGATION.MY_PRODUCTIONS,
            payload : justResumeForVignets
        });
    }
};

export function selectionResume(pageId){

    // Trouve l'objet ayant pour id le numéro de la page
    var prod = productionsIndex.find((obj)=>{
        return obj.id === Number(pageId);
    });
    return function(dispatch){
        dispatch({
            type : NAVIGATION.SELECTED_VIGNET,
            payload : prod
        });
    }
};


