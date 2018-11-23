import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"


// ========== ANIMATIONS IMPORTS
import {staggerBottom} from './custom-functions/animations'

class TopMessage extends Component {

componentWillMount(){
    
}
componentDidMount(){
    staggerBottom(".catch-top-app .letter")
}
componentDidUpdate(){
    staggerBottom(".catch-top-app .letter")
}


  render() {

    return (
        <div className='row catch-top-app justify-content-center'>
            <img className="h-100" src="/img/logo-ds.png" alt="logo" />
            <span className="pl-1 pl-sm-3 align-self-center catch">Hello</span>
            <span className="pl-2 pl-sm-3 align-self-center name">
                {this.props.topMsgUrlSplitedReducer.map((letter,i)=><span className={`letter ${letter === ' ' && 'mr-1'}`} key={i}>{i === 0 ? letter.toUpperCase() : letter}</span>)}
            </span>
            <span className="pl-2 pl-sm-3 align-self-center catch">!</span>
        </div>
    )
  }
}


const mapStateToProps = (state) => {
    return {
        topMsgUrlSplitedReducer : state.topMsgUrlSplitedReducer,
    }
}
export default connect(mapStateToProps)(TopMessage);
