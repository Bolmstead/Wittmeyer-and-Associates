import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import NavigationBarHome from "./NavigationBarHome";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundImage: `url(/images/Boise.jpg)`,
    height: "775px",
    width: "100vw",
    backgroundSize: "cover",
  },
  overlay: {
    zIndex: 1,
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    background: "rgba(0, 0, 0, 0.5)",
  },
  buttonContainer: {
    marginBottom: "175px",
    padding: "0px",
  },
  buttonContainerMobile: {
    marginBottom: "175px",
    padding: "0px",
    marginTop: "60px"
  },
  homeButton: {
    background: "rgb(100, 100 ,100, 0.5)",
    color: "white",
    width: "250px",
    height: "50px",
    borderRadius: "0px",
  },
  homeButtonMobile: {
    background: "rgb(100, 100 ,100, 0.5)",
    color: "white",
    width: "250px",
    height: "50px",
    borderRadius: "0px",
  },
  homeButtonLink: {
    textDecoration: "none",
  },
  title: {
    fontSize: 14,
  },
  logo: {
    marginTop: "180px",
    marginBottom: "0px",
    minWidth: "50px",
    maxWidth: "800px",
    width: "100%",
    height: "auto",
  },
}));

export default function Home() {
  const classes = useStyles();
  const [fadedIn, setFadedIn] = React.useState(false);

  // call API to grab products based on search results
  useEffect(() => {
    async function fadeInHomeScreen() {
      setFadedIn((prev) => !prev);
    }
    fadeInHomeScreen();
  }, []);

  return (
    <Grid item xs={12} className={classes.homeContainer}>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="row"
        className={classes.overlay}
      >
        <Grid item xs={12} align="center">
          <img
            src="/images/logoWhite.png"
            alt="image"
            className={classes.logo}
          />
          <br />
        </Grid>

        <Hidden only={["xs", "sm"]}>
          <Grid item xs={12} className={classes.buttonContainer}>
            <Grid container spacing={8} justify="center">
              <Grid item >
                <a href="#about" className={classes.homeButtonLink}>
                  <Button variant="contained" className={classes.homeButton}>
                    About
                  </Button>
                </a>
              </Grid>
              <Grid item>
                <a href="#expertise" className={classes.homeButtonLink}>
                  <Button variant="contained" className={classes.homeButton}>
                    Expertise
                  </Button>
                </a>
              </Grid>
              <Grid item>
                <a href="#contact" className={classes.homeButtonLink}>
                  <Button variant="contained" className={classes.homeButton}>
                    Contact
                  </Button>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>

        <Hidden only={["md", "lg", "xl"]}>
          <Grid item xs={12} className={classes.buttonContainerMobile}>
            <Grid container spacing={4} justify="center" alignItems="center">
              <Grid item xs={12} align="center" justify="center">
                <a href="#about" className={classes.homeButtonLink}>
                  <Button
                    variant="contained"
                    className={classes.homeButtonMobile}
                  >
                    About
                  </Button>
                </a>
              </Grid>
              <Grid item xs={12} align="center" justify="center">
                <a href="#expertise" className={classes.homeButtonLink}>
                  <Button
                    variant="contained"
                    className={classes.homeButtonMobile}
                  >
                    Expertise
                  </Button>
                </a>
              </Grid>
              <Grid item xs={12} align="center" justify="center">
                <a href="#contact" className={classes.homeButtonLink}>
                  <Button
                    variant="contained"
                    className={classes.homeButtonMobile}
                  >
                    Contact
                  </Button>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
}
