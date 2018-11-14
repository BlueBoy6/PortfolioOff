import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {fakeAction} from "../redux/actions"

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
            <span className="pl-3 align-self-center catch">Hello</span>
            <span className="pl-3 align-self-center name">
                {this.props.topMsgUrlSplitedReducer.map((letter,i)=><span className="letter" key={i}>{i === 0 ? letter.toUpperCase() : letter}</span>)}
            </span>
            <span className="pl-3 align-self-center catch">!</span>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({fakeAction}, dispatch),
});

const mapStateToProps = (state) => {
    return {
        topMsgUrlSplitedReducer : state.topMsgUrlSplitedReducer,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TopMessage);
