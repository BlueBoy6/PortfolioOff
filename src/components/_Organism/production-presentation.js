import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"



// ========== ATOMS IMPORTS
import ListBadges from '../_Atom/ListBadges' 

// ========== MOLECULES IMPORTS
import HeaderPresentation from '../_Molecule/header.presentation' 

// ========== ACTIONS IMPORTS
import {topMsgAction, selectionResume } from "../../redux/actions/index"

// ========== ANIMATIONS IMPORTS
import {popUpAnimIn, bottomSlowIn} from "../custom-functions/animations"

class productionPresentation extends Component {

    componentWillMount(){
        this.props.selectionResume(this.props.match.params.id);
    }
    componentDidMount(){
        console.log(this.props.selectionResumeReducer);
        setTimeout(()=>{this.props.topMsgAction(this.props.selectionResumeReducer.title)})
        popUpAnimIn(".header", 0.7);
        bottomSlowIn(".project-presentation", 0.7,);
    }
    componentDidUpdate(){

    }

    render() {
        if(this.props.selectionResumeReducer){

        }
        const title = this.props.selectionResumeReducer.title;
        const tags =this.props.selectionResumeReducer.tags;
        const presentation =  this.props.selectionResumeReducer.presentation;
        const content =this.props.selectionResumeReducer.content;
        const coverImg = this.props.selectionResumeReducer.coverImg;
        

        

    return (
        <div id="page">
            <HeaderPresentation title={`${title}`} bckg={coverImg}>
                {tags && <ListBadges id={`badges-production`} className={`technos mt-5`} badges={tags}/>}
            </HeaderPresentation>
            <section className='container p-3 pb-lg-5 mb-lg-5'>
                <div className='project-presentation my-5'>
                    <img className="quotes" alt="quotes-icon" src="/img/ico/quotes.png" />
                    <div className='row shadow1'>
                        <img className="quotes-in" alt="quotes-icon" src="/img/ico/quotes-violet.png" />
                        <div className='col-12 p-5'>
                        <p>
                            {presentation && presentation} 
                        </p>
                        </div>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{__html : content}} id='articleInside'></div>
            </section>
        </div>
    )
    }
}


const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({topMsgAction ,selectionResume}, dispatch),
});

const mapStateToProps = (state) => {
    return {
      topMsgUrlSplitedReducer : state.topMsgUrlSplitedReducer,
      productionsResumeReducer : state.productionsResumeReducer,
      selectionResumeReducer : state.selectionResumeReducer
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(productionPresentation);