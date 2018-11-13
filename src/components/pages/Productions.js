import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {topMsgAction,productionsResumeHead } from "../../redux/actions/index"
import GridComponent from "./small-components/grid-component"


class Productions extends Component {

  componentWillMount(){
    this.props.topMsgAction("Productions")
    this.props.productionsResumeHead()
  }


  render() {
    return (
      <div className='page'>
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
      productionsResumeReducer : state.productionsResumeReducer
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Productions);