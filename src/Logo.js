import React, { Component } from 'react'
import Covid from './images/corona.png';
export class Logo extends Component {
    render() {
        return (
            <div className="logo" >
            <h1> Covid-19 <img src={Covid} width="100px"  alt="Covid"/></h1>
            
            
            </div>
        )
    }
}

export default Logo
