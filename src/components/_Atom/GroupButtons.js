import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import {ElasticAppear} from "../custom-functions/animations"

export default class GroupButtons extends Component {
    state = {}

    handleClick = () => this.setState({ active: !this.state.active });

    componentDidMount(){
        ElasticAppear(".filter-tab .button-group", "0.3");
    }

    render() {
        const { active } = this.state
        return (
            <div className={`vignet mb-4 radius gradientDark shadow2 ${this.props.className}`}>
                <div className='col-12 py-3'>
                    <div className='fc_w fs_1 mb-3'>
                        {this.props.message}
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='d-flex button-group radius shadow1'>
                            {["Développement", "Graphisme", "Video"].map((tit, i)=>{
                                return(
                                    <Button key={i} className="gradientLightLinear w-100 py-3" active={active} onClick={this.handleClick}>
                                        {tit}
                                    </Button>
                                )
                            })} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
