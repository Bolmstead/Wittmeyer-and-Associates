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
import MailIcon from "@material-ui/icons/Mail";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles(() => ({
  aboutContainer: {
    backgroundColor: `#E5E5E5`,
    width: "100vw",
    backgroundSize: "cover",
    paddingBottom: "50px",
    paddingTop: "30px",
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
  contact: {
    fontFamily: "Roboto",
    marginTop: "0px",
    marginBottom: "10px",
  },
  contactContainer: {
    marginTop: "25px",
  },
  icon: {
    fontSize: 50,
  },
  contactLink: {
    textDecoration: "none",
    color: "black",
  },
  
  
}));

export default function About() {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      className={classes.aboutContainer}
      align="center"
      justify="center"
    >
      <a id="contact">
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
              md={6}
              align="center"
              justify="center"
              className={classes.contactContainer}
            >
              <a
                href="https://g.page/idahocapitol?share"
                className={classes.contactLink}
              >
                <LocationOnIcon className={classes.icon} />
                <Typography
                  variant="h6"
                  component="h6"
                  className={classes.contact}
                >
                  700 W JEFFERSON ST. BOISE ID, 83702
                </Typography>
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              align="center"
              justify="center"
              className={classes.contactContainer}
            >
              <a
                href="mailto:someone@yoursite.com"
                className={classes.contactLink}
              >
                <MailIcon className={classes.icon} />
                <Typography
                  variant="h6"
                  component="h6"
                  className={classes.contact}
                >
                  {" "}
                  MURPHY@WITTMEYERASSOCIATES.COM
                </Typography>
              </a>
            </Grid>
          </Grid>
        </Container>
      </a>
    </Grid>
  );
}
