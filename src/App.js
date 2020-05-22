import React, {Component} from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
class App extends Component{
  render(){
  return (
    <div className="App">
    <h1>App</h1>
    <Cards />
    <CountryPicker />
    <Chart />
    </div>
  );
 }
}

export default App;
