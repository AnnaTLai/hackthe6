import React from "react";
import withRoot from '../../onepirate/modules/withRoot';
// --- Post bootstrap -----
import AppFooter from '../../onepirate/modules/views/AppFooter';
import ProductHero from '../../onepirate/modules/views/ProductHero';
import ProductValues from '../../onepirate/modules/views/ProductValues';
import AppAppBar from '../../onepirate/modules/views/AppAppBar';
import MainNav from "../../components/navbar";

// export default function Workshops() {
//     return(
//         <div>
//             <MainNav/>
//             <h1> Workshop! </h1>
//         </div>
//     )
// }

function Workshops() {
    return (
      <React.Fragment>
        <AppAppBar />
        <div>
            <h1> Sign up to be a volunteer! </h1>
        </div>
        <AppFooter />
      </React.Fragment>
    );
  }
  
  export default withRoot(Workshops);