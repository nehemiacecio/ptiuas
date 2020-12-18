import React from 'react';

import { Cards, Chart, CountryPicker, Footer,} from './components'
import './App.css';
import './App.module.css';
import { fetchData } from './api';
import Header from './Header';
import Section from './Section';
import { BrowserRouter as Router} from 'react-router-dom';


class App extends React.Component {
    state = {
        data: {},
        country: '',
    }
  
    async componentDidMount() {
        const fetchedData = await fetchData();
  
        this.setState({ data: fetchedData });
    }
  
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country === 'global' ? null : country );
        console.log(country);
        this.setState({ data: fetchedData, country: country });
    }
  
    render() {
        const { data, country } = this.state;
        console.log(data);
  
        return !data ? <p> Loading...</p>: (
                <Router>
                <div classname="App"> 
                <Header/>    
                <Cards data={data}/>
                <CountryPicker classname="App.module" handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                
                
            </div>
            <Section/>
            <Footer/>
            </Router>
            
            
        );
        
        }
    }
     




export default App;

