import React, { Component } from 'react'
import {resizingVignets, scrollBoosterConfig} from "../custom-functions/functions-design"
import {  popUpAnimIn, 
          popUpAnimOut,
          staggerBottomSlow, 
          ElasticAppear} from "../custom-functions/animations"
import GroupButtons from "./GroupButtons"
import "../../style/grid-lines.scss"

export default class GridComponent extends Component {
  constructor(props){
    super(props)
    this.state = {}
}


  componentDidMount(){
      scrollBoosterConfig('#page','.grid-lines')
      staggerBottomSlow(".vignet")
      ElasticAppear(".filter-tab .button-group")
  }
  componentDidUpdate(){
    scrollBoosterConfig('#page','.grid-lines')
    //staggerBottomSlow(".vignet")
  }

  render() {
    // window.onresize = function() {
    //   resizingVignets()
    // }
    console.log('==========IND GRID DATA==========')
    console.log(this.props.dataResume)

    return (
      <div id="nice-wrapper" className=' grid-lines p-4'>
        <GroupButtons className="filter-tab" message="Qu'est ce qui vous intéresse ?" />
        {this.props.dataResume.map((prod,i)=>{
          return(
            <div key={i} className='vignet-container mb-4'>
              <div className='vignet radius gradientDark shadow2'>
                  <div className='py-5 px-4'>
                      <div className='fc_w mb-2'>{prod.date}</div>
                      <h1 className="secNormalFont fs_4 fc_w mb-2">{prod.title}</h1>
                      <div className='technos'>
                          <div className=''>
                              <span></span>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
