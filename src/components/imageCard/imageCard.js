import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


// import img1 from '../../assets/unplash_car.jpg'
// import img2 from '../../assets/food_unplash.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height:"100%"
  },
  media: {
    height: 200,
    
  },
});

export default function ImageCard({cardName,cardImage_Url,newPage__url,card__details}) {
  const classes = useStyles();

const nextPageHandler=()=>{
    const newPageUrl=newPage__url;
    window.open(newPageUrl, "_blank");
}

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cardImage_Url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {card__details}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
   
        <Button size="small" color="primary" onClick={nextPageHandler}>
             Visit site
        </Button>
        
      </CardActions>
    </Card>
  );
}