import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// ========== VARIOUS COMPONENTS IMPORTS
import Menu from './components/Menu'
import TopMessage from './components/TopMessage'

// ========== PAGES IMPORTS
import Home from './components/pages/Home'
import AboutMe from './components/pages/AboutMe'
import Productions from './components/pages/Productions'
import Stacks from './components/pages/Stacks'
import NoMatch from './components/pages/NoMatch'
import ProductionPresentation from './components/_Organism/Production-presentation'



// ========== STYLES IMPORTS
import './style/style.scss'


// ==========  IMPORTS
import {logoOpenSite} from './components/custom-functions/animations'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pageLoaded: false
    }
  }

  componentDidMount(){
    if(!this.state.pageLoaded){
      logoOpenSite()
      this.setState({pageLoaded: true})
    }else{

    }
  }

  render() {

    window.addEventListener('resize', ()=>{
      document.querySelector(".pixelCibler").innerHTML = `${window.innerWidth} | ${window.innerHeight}`
    })
    
    return (
      <div className='container-app'>
      <div className="pixelCibler">{`${window.innerWidth} | ${window.innerHeight}`}</div>
        <div className="App">
          <div className='w-100 h-100 render-page'>
            <div className='container-page'>
              <TopMessage />
              <div id='ovfxh'>
                  <Switch>
                    <Route exact path="/" render={(match)=>{return <Home pageLoaded={this.state.pageLoaded} />}}/>
                    <Route path="/me"  render={(match)=>{return <AboutMe pageLoaded={this.state.pageLoaded} />}}/>
                    <Route exact path="/productions"  render={(match)=>{return <Productions router={match} pageLoaded={this.state.pageLoaded} />}}/>
                    <Route path="/productions/:id" render={(match)=>{return <ProductionPresentation router={match} pageLoaded={this.state.pageLoaded} />}}/>
                    <Route path="/speed-think" render={(match)=>{return <Home router={match} pageLoaded={this.state.pageLoaded} />}}/>
                    <Route path="*" render={()=>{return <Home pageLoaded={this.state.pageLoaded} />}}/>
                  </Switch>
                  <Menu />
              </div>
            </div>
          </div>
        </div>
        
      </div>

    );
  }
}


