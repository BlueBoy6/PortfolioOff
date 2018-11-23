import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {Redirect, Link } from 'react-router-dom'

// ========== ACTIONS IMPORTS
import {topMsgAction,productionsResumeHead, selectionResume } from "../../redux/actions/index"

// ========== ATOMS IMPORTS
import ListBadges from '../_Atom/ListBadges'

// ========== ANIMATIONS IMPORTS
import {fakeWrite, staggerBottomSlow,staggerBottomSlowOut, bottomSlowOut, ElasticAppear} from "../custom-functions/animations"

class Vignet extends Component {

    componentWillMount(){
    }
    componentDidMount(){
        staggerBottomSlow(".vignet", ".letter");
        fakeWrite(`.vignet${this.props.idx} .brushfont .letter`);
    }
    componentDidUpdate(){
    } 
    redirection(id){
        staggerBottomSlowOut(".vignet")
        setTimeout(()=>{
            this.props.productionsResumeHead(id)
        },200)
    }

    render() {

    const {vignet} = this.props;

    return (
    <div className='vignet-container mb-4'>
        <Link style={{textDecoration: "none"}} to={`/productions/${vignet.id}`}>
            <div onClick={()=>{this.redirection(vignet.id)}} style={{backgroundImage :`url(${vignet.coverImg})`, backgroundSize : "cover"}} className={`vignet vignet${vignet.id} radius shadow2`}>
                <div className='py-5 px-4'>
                    <div className="vignet-fader" ></div>
                    <div className='date fc_w mb-3'>{vignet.date}</div>
                    <h1 className="title secNormalFont fs_4 fc_w mb-3">{vignet.title}</h1>
                    {/* =====  Childrens insert just below  ====== */}
                    {this.props.children}
                    {/* =====  Childrens insert just above  ====== */}
                    <div className='vignet-category'>
                    <div className='brushfont fs_c'>
                        {vignet.category.split('').map((letter,i)=>(
                        <span key={i} className="letter">{letter}</span>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </Link>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({topMsgAction, productionsResumeHead, selectionResume}, dispatch),
});

const mapStateToProps = (state) => {
    return {
      topMsgUrlSplitedReducer : state.topMsgUrlSplitedReducer,
      productionsResumeReducer : state.productionsResumeReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Vignet)
