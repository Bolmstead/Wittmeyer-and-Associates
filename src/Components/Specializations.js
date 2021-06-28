import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import Container from "@material-ui/core/Container";
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
  specializationsCard: {
    backgroundColor: "white",
    height: "225px",
    width: "225px",
    borderRadius: "3px",
    filter: "drop-shadow(3px 3px 3px #222222)",
  },
  cardTitle: {
    marginTop: "105px",
    color: "white",
    fontSize: "19px"
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
              m={12}
              variant="h2"
              component="h2"
              className={classes.title}
            >
              EXPERTISE
            </Typography>
          </Grid>
          <Grid item>
            <Container maxWidth="md">
              <Grid
                container
                spacing={4}
                alignItems="center"
                justify="center"
                direction="row"
              >
                <Grid item xs={12} align="center" justify="center">
                  <Typography m={12} variant="h6" component="h6">
                    Our expertise runs the full gamut between government,
                    business, and the community at large.
                  </Typography>
                </Grid>

                <Grid item sm={6} md={4} align="center" justify="center">
                  <Card
                    className={classes.specializationsCard}
                    align="center"
                    justify="center"
                    style={{
                      backgroundImage: `url(/images/ExpertisePics/Agriculture.jpg)`,
                      backgroundSize: "cover",
                    }}
                  >
                    <Typography
                      variant="body1"
                      component="p"
                      className={classes.cardTitle}
                    >
                      AGRICULTURE
                    </Typography>
                  </Card>
                </Grid>


                <Grid item sm={6} md={4} align="center" justify="center">
                  <Card
                    className={classes.specializationsCard}
                    align="center"
                    justify="center"
                    style={{
                      backgroundImage: `url(/images/ExpertisePics/Transportation.jpg)`,
                      backgroundSize: "cover",
                      boxShadow: "inset 0px 0px 50px black"
                    }}
                  >
                    <Typography
                      variant="body1"
                      component="p"
                      className={classes.cardTitle}
                    >
                      TRANSPORTATION
                    </Typography>
                  </Card>
                </Grid>


                <Grid item sm={6} md={4} align="center" justify="center">
                  <Card
                    className={classes.specializationsCard}
                    align="center"
                    justify="center"
                    style={{
                      backgroundImage: `url(/images/ExpertisePics/law.jpg)`,
                      backgroundSize: "cover",
                      boxShadow: "inset 0px 0px 50px black"

                    }}
                  >
                    <Typography
                      variant="body1"
                      component="p"
                      className={classes.cardTitle}
                    >
                      LAW ENFORCEMENT
                    </Typography>
                  </Card>
                </Grid>


                <Grid item sm={6} md={4} align="center" justify="center">
                  <Card
                    className={classes.specializationsCard}
                    align="center"
                    justify="center"
                    style={{
                      backgroundImage: `url(/images/ExpertisePics/Education.jpg)`,
                      backgroundSize: "cover",
                      boxShadow: "inset 0px 0px 50px black"

                    }}
                  >
                    <Typography
                      variant="body1"
                      component="p"
                      className={classes.cardTitle}
                    >
                      EDUCATION
                    </Typography>
                  </Card>
                </Grid>

                <Grid item sm={6} md={4} align="center" justify="center">
                  <Card
                    className={classes.specializationsCard}
                    align="center"
                    justify="center"
                    style={{
                      backgroundImage: `url(/images/ExpertisePics/tax.jpg)`,
                      backgroundSize: "cover",
                      boxShadow: "inset 0px 0px 50px black"

                    }}
                  >
                    <Typography
                      variant="body1"
                      component="p"
                      className={classes.cardTitle}
                    >
                      TAX POLICY
                    </Typography>
                  </Card>
                </Grid>

                <Grid item sm={6} md={4} align="center" justify="center">
                  <Card
                    className={classes.specializationsCard}
                    align="center"
                    justify="center"
                    style={{
                      backgroundImage: `url(/images/ExpertisePics/forestry.jpg)`,
                      backgroundSize: "cover",
                      boxShadow: "inset 0px 0px 50px black"

                    }}
                  >
                    <Typography
                      variant="body1"
                      component="p"
                      className={classes.cardTitle}
                    >
                      FORESTRY
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </a>
    </Grid>
  );
}
