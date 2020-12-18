import React from 'react';

import { Cards, Chart, CountryPicker, Footer,} from './components'
import styles from './App.module.css';
import { fetchData } from './api';
import Navbar from './components/Navbar';



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
            
        

            <div className={styles.container}>
                <Navbar/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                <Footer/>

                

            </div>
    
            
        )
    }

    
}


export default App;
