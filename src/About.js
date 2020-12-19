import React, { Component } from 'react'
import Elfajar from './images/fajar.jpg';
import Gilang from './images/gilang.jpg';
import Nehe from './images/nehe.jpg';
import Billy from './images/billy.jpg';
import './App.module.css';
export class About extends Component {
    render() {
        return (
            <div className="App.module">
                <h2 Justify>About Us</h2>
                <img class ="img" src={Billy} width="350" alt="Billy"/>
                <img class ="img" src={Elfajar} width="350" margin ="10px" margin-right="5px"alt="Fajar"/>
                <img class ="img" src={Gilang} width="350" alt="Gilang"/>
                <img class ="img" src={Nehe} width="350" alt="Nehemia"/>
                

            </div>
        )
    }
}

export default About;
