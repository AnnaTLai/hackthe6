import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from "react";
import Workshops from "./views/Workshops";
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
          </Switch>
        </div>
      </Router>
  );
}

export default App;
