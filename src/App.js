import './App.css';
import GoogleLogin, { GoogleLogout } from 'react-google-login'
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Workshops from "./views/Workshops";
import Volunteer from "./views/Volunteer";
import Donate from "./views/Donate";
import Home from "./views/Home";
import Help from "./views/Help";
import SignUp from "./onepirate/SignUp";


function App() {
  return (
      <Router>
        <div>
          <Switch>
              <Route exact path={"/"}>
                  <Home/>
              </Route>
            <Route path="/workshops">
              <Workshops/>
            </Route>
            <Route path="/volunteer">
              <Volunteer/>
            </Route>
            <Route path="/donate">
              <Donate/>
            </Route>
            <Route path="/help">
              <Help/>
            </Route>
            <Route path="/volunteersignup">
              <SignUp/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
