import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import MetaTags from 'react-meta-tags';

import {topMsgAction} from "../../redux/actions/index"
import {staggerBottom, popUpAnimOut, popUpAnimIn} from '../custom-functions/animations'

//import {Link } from 'react-router-dom'
//import {actionName} from "../actions"

class Home extends Component {

    componentWillMount(){
        this.props.topMsgAction('World')
    }
    componentDidMount(){
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
            <MetaTags>
                <title>Accueil - Portfolio</title>
                <meta name="description" content="Bienvenue sur mon portfolio, je vais te faire découvrir mon travail, te faire tester de nouveaux bouts de codes ou me recruter qui sait ?" />
                <meta property="og:url" content={`http://davidsimoessilva.fr/production`} />
                <meta property="og:title" content="Accueil - Portfolio" />
                <meta property="og:image" content="/img/production/webdesigner/main-view.jpg" />
                <meta property="og:type" content="Accueil" />
                <meta property="og:locale" content="fr_FR" />
                <meta name="author" content="David Simoes Silva" />
                </MetaTags>
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