import React from "react";
import Navigation from "./Navigation";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/"></Redirect>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
