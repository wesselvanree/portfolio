import React from "react";
import Navigation from "./Navigation";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  // Wanneer deze pagina ingeladen wordt door 404.html wordt het vraagteken verwijderd
  removeQuestionMark() {
    let search = document.location.search.replace("?/", "");
    console.log(search);
    window.history.replaceState('', '', search);
  }

  render() {
    return (
      <>
        <Navigation />
        <BrowserRouter>
          <Switch>
            {/* <Route path="/?/" component={Navigation} /> */}
            <Route exact path="/" render={() => {
              this.removeQuestionMark();
              return <Home />
            }} />
            <Redirect to="/"/>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
