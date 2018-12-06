import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import {ElasticAppear} from "../custom-functions/animations"

export default class GroupButtons extends Component {
    componentDidMount(){
        ElasticAppear(".container-button", "0.3");
    }
    redirect = () =>{
        const location = {
            pathname: `${this.props.link}`,
            state: { fromDashboard: true }
        }
        setTimeout(()=>{
            this.props.history.push(location)
        },this.props.timeout)
    }
    render() {
        console.log('==========LINK=========')
        console.log(this.props.link)
        return (
            <div className='container-button justify-content-center'>
            {this.props.tel ? (
                <a href={this.props.link}>
                    <div className={`customButton gradientGreen ${this.props.className}`}>
                        {this.props.children}
                    </div>
                </a>
            ): (
                <div onClick={this.redirect} className={`customButton gradientGreen ${this.props.className}`}>
                    {this.props.children}
                </div>
            )}
                
            </div>
        )
    }
}
