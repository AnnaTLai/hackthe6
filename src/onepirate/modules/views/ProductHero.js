import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import backgroundImage from '../../../images/dog.jpg';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: backgroundImage,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={ backgroundImage }
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h3" marked="center">
        Speak with one of our volunteers for all of your tech needs
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="#"
        sx={{ minWidth: 200 }}
      >
        Get Help Now
      </Button>
    </ProductHeroLayout>
  );
}
