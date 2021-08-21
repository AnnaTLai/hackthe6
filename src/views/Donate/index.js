import React from "react";
import withRoot from '../../onepirate/modules/withRoot';
// --- Post bootstrap -----
import AppFooter from '../../onepirate/modules/views/AppFooter';
import ProductHero from '../../onepirate/modules/views/ProductHero';
import ProductValues from '../../onepirate/modules/views/ProductValues';
import AppAppBar from '../../onepirate/modules/views/AppAppBar';
import MainNav from "../../components/navbar";


function Donate() {
    return (
      <React.Fragment>
        <AppAppBar />
        <div>
            <h1> You can donate here </h1>
        </div>
        <AppFooter />
      </React.Fragment>
    );
  }

  export default withRoot(Donate);
