/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import Menu from './components/Menu'
import TopMessage from './components/TopMessage'
import Home from './components/pages/Home'
import AboutMe from './components/pages/AboutMe'
import Productions from './components/pages/Productions'
import Stacks from './components/pages/Stacks'
import NoMatch from './components/pages/NoMatch'

import {Switch, Route} from 'react-router-dom'


// ============    IMPORTS    ================

import './style/style.scss'


export default class App extends Component {

  render() {

    
    return (
      <div className='container-app'>
        <div className="App">

          <div className='w-100 h-100 render-page'>
            <div className='container-page'>
              <TopMessage />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/me" component={AboutMe}/>
                <Route path="/productions" component={Productions}/>
                <Route path="/stacks" component={Stacks}/>
                <Route path="*" component={NoMatch}/>
              </Switch>
            </div>
          </div>
        </div>
        <Menu />
      </div>

    );
  }
}


