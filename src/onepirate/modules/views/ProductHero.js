import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
    'https://cdn.pixabay.com/photo/2017/03/25/17/55/colorful-2174045_960_720.png';

const styles = (theme) => ({
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
    },
    button: {
        marginTop: '5%',
        minWidth: 200,
        backgroundColor: '#8cc3cb',
        fontSize:'20px',
        borderRadius: 50,
        color: 'black',
    },
    h5: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10),
        },
    },
    more: {
        marginTop: theme.spacing(2),
    },
});

function ProductHero(props) {
    const { classes } = props;

    return (
        <ProductHeroLayout backgroundClassName={classes.background}>
            {/* Increase the network loading priority of the background image. */}
            <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
            <Typography color="inherit" align="center" variant="h4" >
                Speak with one of our volunteers
            </Typography>
            <Typography color="inherit" align="center" variant="h4" >
                for all of your tech needs
            </Typography>
            <Button
                variant="contained"
                size="x-large"
                className={classes.button}

                href="/help"
            >
                Get Help Now
            </Button>

        </ProductHeroLayout>
    );
}

ProductHero.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);