import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/">Home</Link></li>
                    </ul>
            </div>
        )
    }
}

export default Nav
