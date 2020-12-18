import React, { Component } from 'react'
import Logo from './Logo';
import Nav from './Nav';
export class Header extends Component {
    render() {
        return (
            <header>
                <Logo/>  
                <Nav/>
            </header>
        )
    }
}

export default Header
