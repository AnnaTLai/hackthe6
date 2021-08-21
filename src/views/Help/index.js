import withRoot from '../../onepirate/modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import AppFooter from '../../onepirate/modules/views/AppFooter';
import ProductHero2 from '../../onepirate/modules/views/ProductHero2';
import ProductValues from '../../onepirate/modules/views/ProductValues';
import AppAppBar from '../../onepirate/modules/views/AppAppBar';

import MainNav from "../../components/navbar";

// export default function Home() {
//     return (
//         <MainNav/>
//     )
// }

function Home() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero2/>
      <ProductValues />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Home);