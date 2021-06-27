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
import SpecializationCard from './SpcializationCard'



const useStyles = makeStyles(() => ({
  homeContainer: {
    backgroundColor: `rgb(100, 100 ,100)`,
    width: "100vw",
    backgroundSize: "cover",
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
    color: "white",
  },
  pos: {
    marginBottom: 12,
  },
  businessPhoto: {
    marginTop: "100px",
    marginBottom: "0px",
    minWidth: "50px",
    maxWidth: "400px",
  },
  titleContainer:{
    minHeight: "100px",
  },
  specializationsCard:{
    backgroundColor: "white",
    height: "200px",
    width: "200px" 
  }
}));

export default function Specializations() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.homeContainer}>
      <Grid container spacing={6} alignItems="center" justify="center" direction="row">  
        <Grid item xs={12} align="center" justify="center" className={classes.titleContainer}>
          <a id="specializations">
            <Typography variant="h2" component="h2" gutterBottom className={classes.title}>
              SPECIALIZATIONS
            </Typography>
          </a>
        </Grid>

          <SpecializationCard title="Agriculture" pic="/images/business.png"/>
          <SpecializationCard title="Transportation" pic="/images/business.png"/>
          <SpecializationCard title="Law Enforcement" pic="/images/business.png"/>
          <SpecializationCard title="Education" pic="/images/business.png"/>
          <SpecializationCard title="Business" pic="/images/business.png"/>
          <SpecializationCard title="Tax Policy" pic="/images/business.png"/>
          <SpecializationCard title="Forestry" pic="/images/business.png"/>



      </Grid>
    </Grid>
  );
}