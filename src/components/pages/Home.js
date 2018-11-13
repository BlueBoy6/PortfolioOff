import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"

import {topMsgAction} from "../../redux/actions/index"

//import {Link } from 'react-router-dom'
//import {actionName} from "../actions"

class Home extends Component {

    componentWillMount(){
        this.props.topMsgAction('World')
    }

  render() {
    console.log('====================')
    console.log(this.props.match)
    return (
        <div className='page'>
            <div className='row h-100 align-items-center'>
                <div className='col-12 first-presentation'>
                    <div className="name">David Simoes Silva</div>
                    <div className="dev">{"<"}Développeur front-end {"/>"}</div>
                    <div className="crea">Créatif</div>
                </div>
            </div>
        </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({topMsgAction}, dispatch),
});

const mapStateToProps = (state) => {
    return {
        reducerName : state.reducerName,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);