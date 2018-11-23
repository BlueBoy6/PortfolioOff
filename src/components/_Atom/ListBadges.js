import React, { Component } from 'react'

// ========== ANIMATIONS IMPORTS
import {staggerElasticAppear} from "../custom-functions/animations"

export default class ListBadges extends Component {
  componentDidMount(){
    staggerElasticAppear(`#${this.props.id} .pins`, 300);
  }
  render() {
    return (     
      <div id={`${this.props.id}`} className={`${this.props.className}`}>
        {
          this.props.badges.map((badge,i)=>{
            return <span key={i} className="pins mb-2  mr-2 p-2 shadow1"> {badge} </span>
          })
        }
      </div>
    )
  }
}


