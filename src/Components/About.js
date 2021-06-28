import React, { useState, useRef, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import NavigationBarHome from "./NavigationBarHome";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import "./FadeIn.css";
import FadeInSection from "./FadeInSection";
import Hidden from "@material-ui/core/Hidden";



const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    backgroundColor: `#FCFCFC`,
    width: "100vw",
    backgroundSize: "cover",
  },
  homeButton: {
    background: "rgb(100, 100 ,100, 0.5)",
    color: "white",
    width: "200px",
    height: "50px",
    borderRadius: "0px",
  },
  homeButtonLink: {
    textDecoration: "none",
  },
  root: {
    minWidth: 275,
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: 500,
    marginTop: "50px",
    marginBottom: "40px",
  },
  businessPhoto: {
    width: "100%",
    backgroundSize: "cover",
    backgroundImage: `url(/images/business.jpg)`,
    height: "700px",

  },
  businessPhotoMobile: {
    width: "100%",
    backgroundSize: "cover",
    backgroundImage: `url(/images/business.jpg)`,
    height: "300px",
  },
  titleContainer: {},
  aboutCard: {
    backgroundColor: "white",
    borderRadius: "0px",
  },
  aboutText: {
    marginBottom: "40px",
    marginTop: "40px"

  },
}));

export default function About() {
  const classes = useStyles();



  return (
    <Grid item xs={12} className={classes.aboutContainer}>
          <a id="about">

      <Grid
        container
        alignItems="center"
        justify="center"
        direction="row"
      >
        <Hidden only={["xs", "sm"]}>
          <Grid item xs={12} md={6} align="center">
            <FadeInSection>
              <div className={classes.businessPhoto} />
            </FadeInSection>
          </Grid>
        </Hidden>


        <Grid item xs={12} md={6} className={classes.aboutCardContainer}         align="center"
        justify="center">
          <FadeInSection>
          <Container maxWidth="sm">
          <Typography
              m={12}
              variant="h2"
              component="h2"
              className={classes.title}
            >
              WHO WE ARE
            </Typography>

                  <Typography variant="h6" component="h6" className={classes.aboutText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet consectetur. Potenti
                    nullam ac tortor vitae purus. 

                  </Typography>

            </Container>
          </FadeInSection>
        </Grid>
        <Hidden only={["md", "lg", "xl"]}>
          <Grid item xs={12} md={6} align="center"         justify="center"
>

            <FadeInSection>
              <div className={classes.businessPhotoMobile} />
            </FadeInSection>
          </Grid>
        </Hidden>
      </Grid>
      </a>

    </Grid>
  );
}
