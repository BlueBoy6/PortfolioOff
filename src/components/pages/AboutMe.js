import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import { Link } from 'react-router-dom'

import MetaTags from 'react-meta-tags';



// ========== ACTIONS IMPORTS
import {topMsgAction} from "../../redux/actions/index"

// ========== STYLE IMPORTS
import "../../style/aboutme.scss"


// ========== ATOMS IMPORTS
import ListBadges from "../_Atom/ListBadges"
import Button from "../_Atom/Button"

class AboutMe extends Component {

  componentWillMount(){
    this.props.topMsgAction("Moi");
  }
  render() {


    console.log('====================')
    console.log(this.props.router)

    const stacks = [
      "Javascript","React","React Router"," Redux","GSAP","Node.js","Express.js","JSX","jQuery","AJAX","Three.js","MySQL","Vue.js","HTML5","CSS3","SASS - SCSS", "Git", "Lodash", "Bootstrap", "Semantic UI"
    ];
    const softwares = [
      "Visual Studio Code","Photoshop", "Ilustrator","Indesign", "After Effect", "Sony Vegas Pro 11", "Adobe Premier", "Balsamiq", "PostMan"
    ];

    return (
      <div id="page">
        <MetaTags>
          <title>À propos de moi</title>
          <meta name="description" content="Développeur front-end junior" />
          <meta property="og:url" content={`http://davidsimoessilva.fr/moi`} />
          <meta property="og:title" content="Tout savoir sur moi " />
          <meta property="og:image" content="/img/myself.jpg" />
          <meta property="og:type" content="Présentation" />
          <meta property="og:locale" content="fr_FR" />
          <meta name="author" content="David Simoes Silva"></meta>
        </MetaTags>
        <div className='container p-2 p-md-3 p-lg-4'>
          <div className="presentation mb-3">
            <h1>Présentations !</h1>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className='col-6 col-md-4 mb-3 mb-md-0'>
              <img className="img shadow2" alt="Une photo de moi." src="/img/myself.jpg" />
            </div>
            <div className='col-12 col-md-8'>
              <div className='simpleText'>Je répond au nom de :</div>
              <div className='greaText'>David Simoes Silva</div>
              <div className='simpleText mt-2 mt-md-4'>Et devinez quoi ! Je suis un super <span className="brushfont motsouligneGreen"><mark>et fantastique</mark></span></div>
              <div className='greaText'><span>Développeur Front-End</span></div>
              <div className='simpleText mt-2 mt-md-4'>Je suis junior d'expérience,<br/> mais <span className="motsouligneGreen"><mark>expert en motivation et enthousiasme.</mark></span> </div>
              <div className="simpleText mt-2 mt-md-4">Ma stack préférée ?</div>
              <div className='greaText'>Javascript - React</div>
              <div className='simpleText'><span className="brushfont">A la vie, à la mort !</span></div>
            </div>
          </div>
          <div className='row mt-5'>
              <div className='col-12'>
                  <h2 className="presentation mb-3">Mais encore ?</h2>
                  <div className="simpleText">
                    <p>Originaire de <span className="lovely">Lozère</span> (<span className="brushfont">Pays de l’Aligot</span>), j’ai pu réalisé une première expérience dans le web en tant que <Link to="productions/0" class="clink" >web-designer</Link> pendant près d’un an et demi à Angoulême au sein des Page Jaunes.</p>
                    <p>Après <b>une centaine de projets web</b> et un titre de champion de Nouvelle-Aquitaine N4 de roller-hockey avec l’équipe des Foxs d’Angoulême j’ai décidé de me consacré au développement. </p>
                    <p>Pris d’amour pour le développement <span className="lovely180">Javascript</span>, je me suis formé en auto-didacte. Après tout, quoi de mieux que le web pour apprendre le web ? Comme le disait Jacques Coeur : <span className="motsouligneGreen"><mark>"A coeur vaillant rien d'impossible."</mark></span></p>
                    <p>De nature positive, curieuse et pragmatique, je suis à la recherche d’une <span className="lovely">entreprise</span> génial qui <span className="motsouligneGreen mt-2">><mark>saura miser sur mes qualités et mon potentiel d'évolution</mark></span> afin d’en récolter les bénéfices.</p>
                  </div>
              </div>
          </div>
          <div className='row mt-5'>
              <div className='col-12'>
                  <h2 className="presentation mb-3">Et les stacks ?</h2>
                  <div className="simpleText mb-3">
                  </div>
                  <ListBadges id={`badges`} className={`staks`} badges={stacks}/>   
              </div>
          </div>
          <div className='row mt-5'>
              <div className='col-12'>
                  <h2 className="presentation mb-3">Softwares ?</h2>
                  <div className="simpleText mb-3">
                  </div>
                  <ListBadges className={`logiciel`} badges={softwares}/>   
              </div>
          </div>
          <div className='row mt-5 mb-5'>
              <div className='col-12'>
                  <div className="mb-3 text-center">
                    <div className="fs_2 mb-4">J'ai commencé à éveiller votre curiosité ?</div>
                    <div className="fs_3 presentation mb-2 motsouligneGreen brushfont">
                      <mark>Laissez moi capter votre attention !</mark>
                    </div>
                  </div>
                  <div className=''>
                    <Button history={this.props.router.history} timeout={300} className="p-3 m-auto" tel={true} link="tel:0618609270">
                      Appelez-moi !
                    </Button> 
                      
                  </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(AboutMe);