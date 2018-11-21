import React, { Component } from 'react'

// ========== ATOMS IMPORTS
import GroupButtons from "../_Atom/GroupButtons"
import ListBadges from "../_Atom/ListBadges"
// ========== MOLECULES IMPORTS
import Vignet from "../_Molecule/Vignet"

// ========== STYLES IMPORTS
import "../../style/grid-lines.scss"

export default class GridComponent extends Component {
  constructor(props){
    super(props)
    this.state = {}
}


  componentDidMount(){
  }
  componentDidUpdate(){
  }



  render() {

    const {dataResume} = this.props;

    return (
      <div id="nice-wrapper" className='grid-lines p-4'>
        {/* {dataResume.length > 1 && <GroupButtons className="filter-tab" message="Qu'est ce qui vous intéresse ?" />} */}
        {dataResume.map((prod,i)=>{
        return(
          <Vignet key={i} vignet={prod}>
            <ListBadges id={`badges${i}`} className={`technos`} badges={prod.technos}/>   
          </Vignet>
        )
      })}
      </div>
    )
  }
}
