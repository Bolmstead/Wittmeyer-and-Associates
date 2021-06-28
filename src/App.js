import './App.css';
import React, { useState, useEffect } from "react";
import NavigationBar from './Components/NavigationBarHome'
import Home from './Components/Home'
import About from './Components/About'
import Press from './Components/Press'
import Specializations from './Components/Specializations'
import Contact from './Components/Contact'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fade from '@material-ui/core/Fade';



import { makeStyles } from '@material-ui/core/styles';
import Routes from './Routes.js'


const useStyles = makeStyles(() => ({

}));

function App() {
  const classes = useStyles();
  const [fadedIn, setFadedIn] = React.useState(false);

  // call API to grab products based on search results
  useEffect(() => {
    async function fadeInHomeScreen() {
      setFadedIn((prev) => !prev);
    }
    fadeInHomeScreen()
  }, []);
  return (
    <Fade in={fadedIn} {...(fadedIn ? { timeout: 1000 } : {})}
    >
    <div className={classes.app}>
      <Grid container>
        <Home />
        <About />
        <Press />
        <Specializations />
        <Contact />
      </Grid>



    </div>
    </Fade>

  );
}

export default App;
