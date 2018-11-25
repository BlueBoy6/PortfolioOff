import React, { Component } from 'react'

// ========== ANIMATIONS IMPORTS
import {heightDevHeader,staggerBottom, fakeWrite} from "../custom-functions/animations"

// ========== STYLES IMPORTS
import '../../style/presentation.scss'


 
export default class HeaderPresentation extends Component {
    componentDidMount(){
        fakeWrite(".header .title .letter")
    }
    render() {
        return (
            <section style={{background : `url(${this.props.bckg}`}} className="header shadow1">
                <div className='vignet-fader'>
                    
                </div>
                <div className='title w-100'>
                    <h1 className="brushfont fs_4 fc_w">{this.props.title.split('').map((letter,i)=>(
                        <span key={i} className={`letter ${letter === ' ' ? 'mr-1' : ''}`}>{letter}</span>
                        ))}</h1>
                        {this.props.children}
                </div>
            </section>
        )
    }
 }
 
