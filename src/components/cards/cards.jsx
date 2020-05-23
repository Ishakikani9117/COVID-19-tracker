import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import cx from 'classnames';
import {styles } from './cards.module.css';
import CountUp from 'react-countup';
const Cards = ({data}) => {
    console.log(data);
    const { confirmed, recovered, deaths, lastUpdate } = data;
    console.log(confirmed);
    
    if(!confirmed){
        return 'Loading...'
    }
   
    return(
        <div className={styles.container}>
        <Grid container spacing={3} justify="center">
         <Grid item component={Card} className={cx(styles.cards,styles.infected)}>
         <CardContent>
         <Typography color="textSecondary" gutterBottom>Infected</Typography>
         <Typography varient="h5">
             <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />       
         </Typography>
         <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
         <Typography variant="body2">Number of infected active cases of COVID-19</Typography>
         </CardContent>
        </Grid>
        <Grid item component={Card} className={cx(styles.cards,styles.recovered)}>
         <CardContent>
         <Typography color="textSecondary" gutterBottom>Recovered</Typography>
         <Typography varient="h5">
             <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
         </Typography>
         <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
         <Typography variant="body2">Number of recovered cases of COVID-19</Typography>
         </CardContent>
        </Grid>
        <Grid item component={Card} className={cx(styles.cards,styles.deaths)}>
         <CardContent>
         <Typography color="textSecondary" gutterBottom>Deaths</Typography>
         <Typography varient="h5">
         <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
         </Typography>
         <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
         <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
         </CardContent>
        </Grid>
        </Grid>

        </div>
    )
}
 export default Cards;