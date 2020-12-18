import React, { Component } from 'react';

import About from './About';
import App from './App';

import {Route} from 'react-router-dom';

export class Section extends Component {
    render() {
        return (
            <section>

                <Route path="/about" component={About} exact target="blank"/>
                <Route path="/app" component={App} exact/>
                
                
                
            
            </section>
        )
    }
}

export default Section
