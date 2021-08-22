// with reference to: https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/pricing/Pricing.js

import React from "react";
import withRoot from '../../onepirate/modules/withRoot';
// --- Post bootstrap -----
import AppFooter from '../../onepirate/modules/views/AppFooter';
import ProductHero from '../../onepirate/modules/views/ProductHero';
import ProductValues from '../../onepirate/modules/views/ProductValues';
import AppAppBar from '../../onepirate/modules/views/AppAppBar';
import MainNav from "../../components/navbar";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import './donate.css'


import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';

function Donate(props) {
  const classes = useStyles();

      return (
      <React.Fragment>
        <AppAppBar />

        <div id={"container"}>
          Help bridging the technology gap for
          <div id={"flip"}>
            <div><div>Her</div></div>
            <div><div>Him</div></div>
            <div><div>They</div></div>
          </div>
          Everyone!
        </div>

        <CssBaseline />

        <div>

        <Container maxWidth="sm" component="main" className={classes.heroContent}>
         <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
           Donate now
         </Typography>

       </Container>

       {/* End hero unit */}
       <Container maxWidth="md" component="main">
         <Grid container spacing={5} alignItems="flex-end">
           {tiers.map((tier) => (
             // Enterprise card is full width at sm breakpoint
             <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
               <Card>
                 <CardHeader
                   title={tier.title}
                   subheader={tier.subheader}
                   titleTypographyProps={{ align: 'center' }}
                   subheaderTypographyProps={{ align: 'center' }}
                   action={tier.title === 'Pro' ? <StarIcon /> : null}
                   className={classes.cardHeader}
                 />
                 <CardContent>
                   <div className={classes.cardPricing}>
                     <Typography component="h2" variant="h3" color="textPrimary">
                       ${tier.price}
                     </Typography>
                     <Typography variant="h6" color="textSecondary">
                       .00
                     </Typography>
                   </div>
                   <ul>
                     {tier.description.map((line) => (
                       <Typography component="li" variant="subtitle1" align="center" key={line}>
                         {line}
                       </Typography>
                     ))}
                   </ul>
                 </CardContent>
                 <CardActions>
                   <Button fullWidth variant={tier.buttonVariant} color="primary">
                     {tier.buttonText}
                   </Button>
                 </CardActions>
               </Card>
             </Grid>
           ))}
         </Grid>
       </Container>

        </div>
        <br />
    <br />


        <AppFooter />
      </React.Fragment>
    );
  }

  const tiers = [
    {
      title: 'One-time donation',
      price: '10',
      description: [
        'Online reciept',
        'No need to log in'
      ],
      buttonText: 'Donate now',
      buttonVariant: 'outlined',
    },
    {
      title: 'Monthly',
      subheader: 'Most popular',
      price: '5',
      description: [
        'Online reciept',
        'Newsletter'
      ],
      buttonText: 'Donate now',
      buttonVariant: 'contained',
    },
    {
      title: 'Annual',
      price: '30',
      description: [
        'Online reciept',
        'Thank you letter',
        'Newsletter'
      ],
      buttonText: 'Donate now',
      buttonVariant: 'outlined',
    },
  ];

  const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(30),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
  }));

  export default withRoot(Donate);
