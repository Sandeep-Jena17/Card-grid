import React from 'react'
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './components/imageCard/imageCard';
import Data from './Data/cardDetails.json';

const useStyles=makeStyles({
    gridContainer:{
        marginTop:"20px",
        paddingLeft:"20px",
        paddingRight:"20px",
        overflowX:"hidden"
    }
});


const Home = () => {
    const classes=useStyles();

   const renderCards=Object.keys(Data).map((key)=>{
    return <Grid item xs={12} sm={6} md={4}>
    <ImageCard  cardName={Data[key].card__title}
                cardImage_Url={Data[key].image__url}
                newPage__url={Data[key].newPage__url}
                card__details={Data[key].card__details}
    />
    </Grid> 
   })


    return (
        
            <Grid  container className={classes.gridContainer} spacing={4} >
               {renderCards}                    
            </Grid>
        
    )
}

export default Home
