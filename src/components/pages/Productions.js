import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import MetaTags from 'react-meta-tags'

// ========== ACTIONS IMPORTS
import {topMsgAction,productionsResumeHead } from "../../redux/actions/index"

// ========== ATOMS IMPORTS
import GroupButtons from "../_Atom/GroupButtons"
import ListBadges from "../_Atom/ListBadges"
// ========== MOLECULES IMPORTS
import Vignet from "../_Molecule/Vignet"



// ========== STYLES IMPORTS
import "../../style/grid-lines.scss"

class Productions extends Component {


  componentWillMount(){
    this.props.topMsgAction("Productions");
    this.props.productionsResumeHead();
  }
  componentDidMount(){
    
  }

  render() {

    return (
      <div id='page'>
        <MetaTags>
                <title>Mes Productions</title>
                <meta name="description" content="Présentation de production"  />
                <meta property="og:url" content={`http://davidsimoessilva.fr/productions`} />
                <meta property="og:title" content="Présentation des productions" />
                <meta property="og:image" content="/img/production/webdesigner/main-view.jpg" />
                <meta property="og:type" content="Présentation de production" />
                <meta property="og:locale" content="fr_FR" />
                <meta name="author" content="David Simoes Silva"></meta>
            </MetaTags>
        <div id="nice-wrapper" className='grid-lines p-2 p-md-3 p-lg-4'>
          {/* {dataResume.length > 1 && <GroupButtons className="filter-tab" message="Qu'est ce qui vous intéresse ?" />} */}
          {this.props.productionsResumeReducer.map((prod,i)=>{
            return(
              <Vignet history={this.props.router.history} key={i} vignet={prod}>
                <ListBadges id={`badges${i}`} className={`technos`} badges={prod.technos}/>   
              </Vignet>
            )
          })}
        </div>
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