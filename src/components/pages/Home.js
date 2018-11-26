import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"

import {topMsgAction} from "../../redux/actions/index"
import {staggerBottom, popUpAnimOut, popUpAnimIn} from '../custom-functions/animations'

//import {Link } from 'react-router-dom'
//import {actionName} from "../actions"

class Home extends Component {

    componentWillMount(){
        console.log('========props============')
        console.log(this.props)
        this.props.topMsgAction('World')
    }
    componentDidMount(){
        console.log("le props interessant",this.props.pageLoaded)
        if(this.props.pageLoaded){
            staggerBottom(".coat .letter", 0)
            popUpAnimIn(".first-presentation .name", 1.2, 0.3)
            popUpAnimOut(".first-presentation .dev", 1.2, 0.3)
        }else{
            staggerBottom(".coat .letter",5100);
            popUpAnimOut(".first-presentation .name", 1.2, 5.1);
            popUpAnimOut(".first-presentation .dev", 1.2, 5.3);
        }
        
    }
    componentDidUpdate(){
        //staggerBottom(".coat .letter")
    }

  render() {
    const coatCreative = "Créatif".split('').map((letter,i)=><span key={i} className="letter">{letter}</span>);
    return (
        <div id='page'>
            <div className='row h-100 align-items-center'>
                <div className='col-12 first-presentation'>
                    <div className="name">David Simoes Silva</div>
                    <div className="dev">{"<"}Développeur front-end {"/>"}</div>
                    <div className="crea">
                        <span className='coat coat1'>
                            {coatCreative}
                        </span>
                        <span className='coat coat2'>
                            {coatCreative}
                        </span>
                        <span className='coat coat3'>
                            {coatCreative}
                        </span>
                    </div>
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