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
import productionPresentation from './components/_Organism/production-presentation'



// ========== STYLES IMPORTS

import './style/style.scss'


export default class App extends Component {

  render() {

    window.addEventListener('resize', ()=>{
      document.querySelector(".pixelCibler").innerHTML = `${window.innerWidth} px`
    })
    
    return (
      <div className='container-app'>
      <div className="pixelCibler">{`${window.innerWidth} px`}</div>
        <div className="App">
          <div className='w-100 h-100 render-page'>
            <div className='container-page'>
              <TopMessage />
              <div id='ovfxh'>
                  <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/me" component={AboutMe}/>
                    <Route exact path="/productions" component={Productions}/>
                    <Route path="/productions/:id" component={productionPresentation}/>
                    <Route path="/speed-think" component={Home}/>
                    <Route path="*" component={NoMatch}/>
                  </Switch>
              </div>
            </div>
          </div>
        </div>
        <Menu />
      </div>

    );
  }
}


