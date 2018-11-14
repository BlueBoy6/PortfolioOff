import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {topMsgAction,productionsResumeHead } from "../../redux/actions/index"
import GridComponent from "../small-components/grid-component"

import {NiceScrollPage} from "../custom-functions/functions-design"



class Productions extends Component {

  componentWillMount(){
    this.props.topMsgAction("Productions");
    this.props.productionsResumeHead();
  }
  componentDidMount(){}

  resumeClicked(event){
    console.log(event)
  }

  render() {
    return (
      <div id='page'>
        <GridComponent resumeClicked={this.resumeClicked.bind(this)} dataResume={this.props.productionsResumeReducer} />
        <div id="nice-scroll"></div>
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({topMsgAction, productionsResumeHead}, dispatch),
});

const mapStateToProps = (state) => {
    return {
      topMsgUrlSplitedReducer : state.topMsgUrlSplitedReducer,
      productionsResumeReducer : state.productionsResumeReducer
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Productions);