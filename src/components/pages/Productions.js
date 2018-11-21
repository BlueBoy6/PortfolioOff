import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"

// ========== ACTIONS IMPORTS
import {topMsgAction,productionsResumeHead } from "../../redux/actions/index"

// ========== ORGANISM IMPORTS
import GridComponent from "../_Organism/grid-component"



class Productions extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  componentWillMount(){
    this.props.topMsgAction("Productions");
    this.props.productionsResumeHead();
  }
  componentDidMount(){
    
  }


  render() {

    return (
      <div id='page'>
        <GridComponent dataResume={this.props.productionsResumeReducer} />
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
      productionsResumeReducer : state.productionsResumeReducer,
      selectionResumeReducer : state.selectionResumeReducer
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Productions);