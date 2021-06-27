import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import NavigationBarHome from './NavigationBarHome'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(() => ({
  homeContainer: {
    backgroundColor: `#E5E5E5`,
    width: "100vw",
    backgroundSize: "cover",
    paddingBottom: "30px"
  },
  homeButton: {
    background: "rgb(100, 100 ,100, 0.5)",
    color: "white",
    width: "200px",
    height: "50px",
    borderRadius: "0px"
  },
  homeButtonLink: {
    textDecoration: "none"
  },
  root: {
    minWidth: 275,
  },
  title: {
    fontFamily: "Roboto",
    marginTop: "20px",
    marginBottom: "10px"

  },
  businessPhoto: {
    minWidth: "50px",
    maxWidth: "400px",
    filter: "drop-shadow(3px 3px 3px #222222)"
  },
  titleContainer:{
  },
  aboutCard:{
    backgroundColor: "white",
    borderRadius: "0px"
  }

}));

export default function About() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.homeContainer}>
      <Grid container spacing={2} alignItems="center" justify="center" direction="row">  
        <Grid item xs={12} align="center" justify="center" className={classes.titleContainer}>
          <Typography variant="h2" component="h2" className={classes.title}>
            WHO WE ARE
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} align="center">
          <img src="/images/business.jpg" alt="image" className={classes.businessPhoto}/><br/>
        </Grid>

        <Grid item xs={12} md={6} className={classes.aboutCardContainer}>
          <Container>
          <Card className={classes.aboutCard}>
            <CardContent>

              <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur. Potenti nullam ac tortor vitae purus. Nisi est sit amet facilisis magna. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Elit at imperdiet dui accumsan sit amet nulla facilisi. Risus commodo viverra maecenas accumsan lacus vel. 
                <br />
                <br />

                Tempus iaculis urna id volutpat lacus. Interdum velit euismod in pellentesque massa placerat duis. Orci porta non pulvinar neque laoreet suspendisse interdum. Varius quam quisque id diam vel quam elementum. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Neque gravida in fermentum et sollicitudin ac orci.  Sagittis aliquam malesuada bibendum arcu. Suspendisse sed nisi lacus sed viverra. Urna et pharetra pharetra massa massa. Arcu ac tortor dignissim convallis aenean et tortor at.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
}