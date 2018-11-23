import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {NavLink} from "react-router-dom"


import menuData from '../data/main-menu.json'

// ========== STYLES IMPORTS
import '../style/menu.scss'


// ========== ANIMATIONS IMPORTS
import {menuAnimationClose, menuAnimationOpen} from './custom-functions/animations'

class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      menuOpen: false
    }
  }

stateMenu(e){
  if(window.innerWidth < 960){
    if(e.target.parentNode.parentNode.classList.contains("active")){
      e.target.parentNode.parentNode.classList.remove("active")
      this.setState({ menuOpen : false})
      menuAnimationClose()
    }else{
      e.target.parentNode.parentNode.classList.add("active");
      this.setState({ menuOpen : true})
      menuAnimationOpen()
    }
  }
}
  
  render() {
    console.log('=========MENU OPEN===========')
    console.log(this.state.menuOpen)

    return (
    <div className='row container-menu justify-content-center'>
      <nav onClick={(e)=>{this.stateMenu(e)}} className={`menu`}>
      <div className="openMenu">
          <div className="burger">
            <div  className="open-line"> 
              {this.state.menuOpen ? (
              <span><span className="brushfont fc_y">Close</span> Menu</span> 
              ):("Menu")
            }
            </div>
          </div>
        </div>
        <div className="menu-group btn-group w-100" role="group" aria-label="First group">
            {
              menuData.map((item,i)=>{
                var menuLength = menuData.length;
                return(
                  <NavLink key={i} style={{height: window.innerWidth > 960 ? "auto" : `calc((90vh - 57px) / ${menuLength})` ,width: window.innerWidth > 960 ? `calc(100%/${menuLength})` : `100%`}} className="btn py-4 align-items-center" to={item.link}>
                    <span>{item.name}</span>
                  </NavLink>
                )
              })
            }
        </div>
      </nav>  
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
export default connect(mapStateToProps,mapDispatchToProps)(Menu);
