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

const useStyles = makeStyles(() => ({
  homeContainer: {
    backgroundColor: `#FCFCFC`,
    width: "100vw",
    backgroundSize: "cover",
    paddingBottom: "30px",
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
    minWidth: "50px",
    maxWidth: "400px",
    filter: "drop-shadow(3px 3px 3px #222222)",
    borderRadius: "3px",

  },
  titleContainer: {},
  aboutCard: {
    backgroundColor: "white",
    borderRadius: "0px",
  },
}));

export default function About() {
  const classes = useStyles();
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);

        // No need to keep observing:
        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <Grid item xs={12} className={classes.homeContainer}>
                  <Container maxWidth="lg">

      <Grid
        container
        spacing={2}
        alignItems="center"
        justify="center"
        direction="row"
      >
        <Grid
          item
          xs={12}
          align="center"
          justify="center"
          className={classes.titleContainer}
        >
          <a id="about">
            <Typography variant="h2" component="h2" className={classes.title}>
              WHO WE ARE
            </Typography>
          </a>
        </Grid>

        <Grid item xs={12} md={6} align="center" ref={domRef}>
          <FadeInSection>
            <img
              src="/images/business.jpg"
              alt="image"
              className={classes.businessPhoto}
            />
            <br />
          </FadeInSection>
        </Grid>

        <Grid item xs={12} md={6} className={classes.aboutCardContainer}>
          <FadeInSection>
            <Container>

                  <Typography variant="h6" component="h6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet consectetur. Potenti
                    nullam ac tortor vitae purus. Nisi est sit amet facilisis
                    magna. Diam maecenas ultricies mi eget mauris pharetra et
                    ultrices neque. Elit at imperdiet dui accumsan sit amet
                    nulla facilisi. Risus commodo viverra maecenas accumsan
                    lacus vel.

                  </Typography>

            </Container>
          </FadeInSection>
        </Grid>
      </Grid>
      </Container>

    </Grid>
  );
}
