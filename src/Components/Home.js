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
    backgroundImage: `url(/images/Boise.jpg)`,
    height: "100vh",
    width: "100vw",
    backgroundSize: "cover",
  },
  overlay: {
    zIndex: 1,
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    background: "rgba(0, 0, 0, 0.5)"
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
  title: {
    fontSize: 14,
  },
  logo: {
    marginTop: "100px",
    marginBottom: "0px",
    minWidth: "50px",
    maxWidth: "700px",
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.homeContainer}>
      <Grid container
        alignItems="center"
        justify="center"
        direction="row" className={classes.overlay}
      >     
          <Grid item xs={12} align="center">
            <img src="/images/logoWhite.png" alt="image" className={classes.logo}/><br/>
          </Grid>

          <Grid item xs={12} mb={200}>
            <Grid container spacing={8} justify="center">
            <Grid item>
                <a href="#About" className={classes.homeButtonLink}>
                  <Button variant="contained" className={classes.homeButton}>About</Button>
                </a>
              </Grid>
              <Grid item>
                <a href="#Services" className={classes.homeButtonLink}>
                  <Button variant="contained" className={classes.homeButton}>Services</Button>
                </a>
              </Grid>
              <Grid item>
                <a href="#Contact" className={classes.homeButtonLink}>
                  <Button variant="contained" className={classes.homeButton}>Contact</Button>
                </a>
              </Grid>
            </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
}