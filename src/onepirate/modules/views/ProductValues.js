import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import productValues1 from '../../../images/helpingHand.svg';
import productValues2 from '../../../images/workshop.svg';
import productValues3 from '../../../images/onepirate/productValues3.svg';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
    marginBottom: theme.spacing(1),
  },
  image2: {
    height: 65,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
      <section className={classes.root}>
        <Container className={classes.container}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                    className={classes.image2}
                    src={ productValues1}
                    alt="suitcase"
                />
                <Typography variant="h6" className={classes.title}>
                  Volunteer
                </Typography>
                <Typography variant="h5">
                  {'Help reduce the digital divide by volunteering 1-10 hours a week to'}
                  {' teach less tech-savvy community members about using computers, the'}
                  {' Internet, and other technologies.'}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                    className={classes.image2}
                    src={ productValues2 }
                    alt="graph"
                />
                <Typography variant="h6" className={classes.title}>
                  Workshops
                </Typography>
                <Typography variant="h5">
                  {'We offer free workshops on various topics such as online banking, internet setup'}
                  {' and usage, and social media and data privacy to educate the general public.'}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                    className={classes.image}
                    src={ productValues3 }
                    alt="clock"
                />
                <Typography variant="h6" className={classes.title}>
                  Donate
                </Typography>
                <Typography variant="h5">
                  {'All proceeds will be used to purchase technologies such as computers and tablets'}
                  {' for students and families from underpriviledged communities.'}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);