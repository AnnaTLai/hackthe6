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
          </Switch>
        </div>
      </Router>
  );
}

export default App;
