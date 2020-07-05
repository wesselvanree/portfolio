import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";

function App() {
  let navigationLinksVisible: boolean = true;
  return (
    <Router>
      <div id="navigation">
        <div className="navigation__bar">
          <p>Wessel van Ree</p>
          <div
            className="hamburger"
            onClick={(event) => {
              const navigationLinks = document.querySelector(
                ".navigation__links"
              ) as HTMLElement;

              navigationLinks.classList.contains("visible")
                ? navigationLinks.classList.remove("visible")
                : navigationLinks.classList.add("visible");
            }}
          >
            <div className="hamburger__line hamburger__line1"></div>
            <div className="hamburger__line hamburger__line2"></div>
            <div className="hamburger__line hamburger__line3"></div>
          </div>
        </div>
        <ul
          className={
            "navigation__links " + (navigationLinksVisible ? "visible" : "")
          }
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
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
