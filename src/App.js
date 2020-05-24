import React, {Component} from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData, fetchCountryData} from './api';
import image from './image/image.png';
class App extends Component{
  state={
    data: {},
    country: ''
  }
  
  async componentDidMount(){
    const data = await fetchData();
    this.setState({
      data: data
    })
  }

  handleCountry = async (country) => {
    const data = await fetchData(country);
    this.setState({
      data,
      country: country
    })
  }
  
  render(){
   const { data, country} = this.state;
  return (
    <div className={styles.container}>
    <img src={image} className={styles.image} alt="COVID-19"/>
    <Cards data={data}/>
    <CountryPicker handleCountry={this.handleCountry} />
    <Chart data={data} country={country}/>
    </div>
  );
 }
}

export default App;
