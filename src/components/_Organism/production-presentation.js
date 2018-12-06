import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import MetaTags from 'react-meta-tags'

import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';


// ========== ATOMS IMPORTS
import ListBadges from '../_Atom/ListBadges' 
import BackButton from '../_Atom/BackButton' 

// ========== MOLECULES IMPORTS
import HeaderPresentation from '../_Molecule/header.presentation' 

// ========== ACTIONS IMPORTS
import {topMsgAction, selectionResume } from "../../redux/actions/index"

// ========== ANIMATIONS IMPORTS
import {scrollManipulator} from "../custom-functions/scrollManipulator"
import {popUpAnimIn, bottomSlowIn, bottomSlowOut} from "../custom-functions/animations"

class ProductionPresentation extends Component {

    componentWillMount(){
        this.props.selectionResume(this.props.router.match.params.id);
    }
    componentDidMount(){
        setTimeout(()=>{this.props.topMsgAction(this.props.selectionResumeReducer.title)})
        popUpAnimIn(".header", 0.7);
        bottomSlowIn("#page", 0.7);
    }
    componentDidUpdate(){

    }

    changePageListenner(){
        bottomSlowOut("#page", 0.3)
    }
    render() {

        const {title, tags, presentation, content, coverImg, librairies } = this.props.selectionResumeReducer;

        document.querySelector(".page")
        if(document.querySelector(".itemPlaced")){
            const itemToAnim = document.querySelector(".itemPlaced");
            var itemPosTop = itemToAnim.offsetTop
        }
        setTimeout(()=>{
            scrollManipulator();
        },10) 
        return (
            <div id="page">
            
                    <MetaTags>
                        <title>{title}</title>
                        <meta name="description" content={presentation} />
                        <meta property="og:url" content={`http://davidsimoessilva.fr/`+title} />
                        <meta property="og:title" content={title} />
                        <meta property="og:image" content={coverImg} />
                        <meta property="og:type" content="Présentation de production" />
                        <meta property="og:locale" content="fr_FR" />
                        <meta name="author" content="David Simoes Silva"></meta>
                    </MetaTags>

                    <HeaderPresentation  title={`${title}`} bckg={coverImg}>
                        {tags && <ListBadges id={`badges-production`} className={`technos mt-5`} badges={tags}/>}
                        <BackButton className="mt-5" changePage={this.changePageListenner.bind(this)} history={this.props.router.history} />
                    </HeaderPresentation>
                    <section className='container p-3 pb-lg-5 mb-lg-5'>

                        <div className='project-presentation my-5'>
                            <img className="quotes" alt="quotes-icon" src="/img/ico/quotes.png" />
                            <div className='cadre shadow1'>
                                <img className="quotes-in" alt="quotes-icon" src="/img/ico/quotes-violet.png" />
                                <div className='p-4 p-lg-5'>
                                    <p dangerouslySetInnerHTML={{__html : presentation}} ></p>
                                </div>
                            </div>
                        </div>
                        <div className='row mb-5'>
                            <div className='col'>
                                <h2>Les librairies utilisés</h2>
                                <div className='my-3'>
                                    {librairies && <ListBadges className={`technos`} badges={librairies}/>}
                                </div>
                            </div>
                        </div>
                        
                        <div dangerouslySetInnerHTML={{__html : content}} id='articleInside'></div> 
                        
                    </section>
            </div>
        )//end return
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
export default connect(mapStateToProps,mapDispatchToProps)(ProductionPresentation);