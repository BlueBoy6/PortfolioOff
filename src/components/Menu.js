import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {NavLink} from "react-router-dom"


import menuData from '../data/main-menu.json'
import '../style/menu.scss'

class Menu extends Component {

  

  render() {
    return (

    <div className='menu'>
      <div className="btn-group w-100" role="group" aria-label="First group">
          {
            menuData.map((item,i)=>{
              var menuLength = menuData.length;
              return(
                <NavLink key={i} style={{width: `calc(100%/${menuLength})`}} type="button" className="btn py-4" to={item.link}>
                  <span>{item.name}</span>
                </NavLink>
              )
            })
          }
      </div>
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
