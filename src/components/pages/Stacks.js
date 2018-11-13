import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
//import {Link } from 'react-router-dom'
//import {actionName} from "../actions"

class Stacks extends Component {
  render() {

    console.log('====================')
    console.log(this.props.match)

    return (
      <div>
        Stacks
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({}, dispatch),
});

const mapStateToProps = (state) => {
    return {
        reducerName : state.reducerName,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Stacks);