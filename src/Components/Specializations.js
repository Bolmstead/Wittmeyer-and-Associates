import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import NavigationBarHome from "./NavigationBarHome";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import SpecializationCard from "./SpcializationCard";
import Grow from "@material-ui/core/Grow";
import FadeInSection from "./FadeInSection";
import "./FadeIn.css";

const useStyles = makeStyles(() => ({
  homeContainer: {
    backgroundColor: `white`,
    width: "100vw",
    backgroundSize: "cover",
    marginBottom: "60px",
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
    marginTop: "50px",
    marginBottom: "30px",
    fontWeight: 500,
  },
  businessPhoto: {
    minWidth: "50px",
    maxWidth: "400px",
  },
  titleContainer: {},
  specializationsCard: {
    backgroundColor: "white",
    height: "200px",
    width: "200px",
  },
}));

export default function Specializations() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.homeContainer}>
      <a id="expertise">
        <Grid
          container
          spacing={6}
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
            <Typography
              m={10}
              variant="h2"
              component="h2"
              className={classes.title}
            >
              EXPERTISE
            </Typography>
          </Grid>
          <SpecializationCard title="AGRICULTURE" pic="/images/business.png" />

          <SpecializationCard
            title="TRANSPORTATION"
            pic="/images/business.png"
          />

          <SpecializationCard
            title="LAW ENFORCEMENT"
            pic="/images/business.png"
          />

          <SpecializationCard title="EDUCATION" pic="/images/business.png" />

          <SpecializationCard title="BUSINESS" pic="/images/business.png" />

          <SpecializationCard title="TAX POLICY" pic="/images/business.png" />

          <SpecializationCard title="FORESTRY" pic="/images/business.png" />
        </Grid>
      </a>
    </Grid>
  );
}
