import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route path="/contact">
          <h1>Contact</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
