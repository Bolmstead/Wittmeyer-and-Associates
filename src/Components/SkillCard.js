import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from './Stylings/styleSkillCard.js';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 200
  },
  media: {
    height: 175,
    width: 200,
    objectFit: "contain",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "5px",
  },
  ratingNumber: {
    top: 200
  },
  price: {
    fontWeight: "bold",
    textDecoration: 'none'
  },
  noUnderline: {
    textDecoration: 'none'
  },
  cardContent:{
    minHeight: '100px'
  }
});

function SkillCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={4} lg={3}>
      <Grid container direction="row" justify="center" alignItems="center">
      <Link href={"/product/" + id} 
            color="inherit" 
            style={{ textDecoration: 'none' }}
      >
        <Card className={classes.root} variant="outlined">
          <CardActionArea>
            <div className={classes.imageContainer}>
              <img className={classes.media} src={imageUrl} title={name} />
            </div>
            <CardContent className={ classes.cardContent }>
              <Rating name="read-only" value={rating} size="small" 
              readOnly display="inline"
              />  
              <div>
                <Typography variant="h6" color="body2" 
                component="p" display="inline"  
                className={classes.price}
                >
                  ${bidDisplay}{'  '}
                </Typography>
                <Typography variant="body2" 
                color="textSecondary" component="p" 
                display="inline" 
                >
                </Typography>
              </div>
              <Typography variant="body2" color="textSecondary" component="p">
                Current bid by 
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {username}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      </Grid>
    </Grid>
  );
}

export default SkillCard;
