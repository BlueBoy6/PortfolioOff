import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class GroupButtons extends Component {
    state = {}

    handleClick = () => this.setState({ active: !this.state.active })

    render() {
        const { active } = this.state
        return (
            <div className={`vignet mb-4 radius gradientDark shadow2 ${this.props.className}`}>
                <div className='col-12 py-3 box-shadow: 0 5px 20px -1px rgba(0, 0, 0, 0.6);'>
                    <div className='fc_w fs_1 mb-3'>
                        {this.props.message}
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='d-flex button-group radius shadow1'>
                                <Button className="gradientLightLinear fc_w w-100 py-3" active={active} onClick={this.handleClick}>
                                    Développement
                                </Button>
                                <Button className="gradientLightLinear fc_w w-100 py-3" active={active} onClick={this.handleClick}>
                                    Graphisme
                                </Button>
                                <Button className="gradientLightLinear fc_w w-100 py-3" active={active} onClick={this.handleClick}>
                                    Video
                                </Button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
