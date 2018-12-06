import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import {ElasticAppear} from "../custom-functions/animations"

export default class GroupButtons extends Component {
    state = {}

    componentDidMount(){
        ElasticAppear(".container-backButton", "0.3");
    }

    redirectBack = () =>{
        this.props.changePage(true)
        setTimeout(()=>{
            this.props.history.goBack()
        },300)
    }
    render() {
        const { active } = this.state

        return (
            <div className='m-auto container-backButton'>
                <div onClick={this.redirectBack} className={`backButton gradientGreen ${this.props.className}`}>
                    Retour
                </div>
            </div>
        )
    }
}
