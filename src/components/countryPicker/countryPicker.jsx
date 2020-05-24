import React,{useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './countryPicker.module.css';
import {countryList} from '../../api';

const CountryPicker = ({handleCountry}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    
    useEffect(()=>{
        const countries = async () =>{
            const fetchedCountries = await countryList();
            setFetchedCountries(fetchedCountries);
        }
        countries();
    },[]);

    return( 
        <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e) => {handleCountry(e.target.value)}}>
            <option value="">Global</option>
            {fetchedCountries.map((country, i)=> 
               <option value={country} key={i}>{country}</option>
            )}
        </NativeSelect>
        </FormControl>
    )
}
 export default CountryPicker;