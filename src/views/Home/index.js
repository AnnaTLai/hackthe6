import withRoot from '../../onepirate/modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import AppFooter from '../../onepirate/modules/views/AppFooter';
import ProductHero from '../../onepirate/modules/views/ProductHero';
import ProductValues from '../../onepirate/modules/views/ProductValues';
import ProductSmokingHero from '../../onepirate/modules/views/ProductSmokingHero';
import AppAppBar from '../../onepirate/modules/views/AppAppBar';


// export default function Home() {
//     return (
//         <MainNav/>
//     )
// }

function Home() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductSmokingHero/>
      <ProductValues />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Home);
