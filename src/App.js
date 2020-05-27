import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "mobx-react";
import { authenticationSignUpRoute, authenticationLoginRoute } from "./Authentication/routes";

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import "./App.css";
import Stores from "./Common/stores/index";
const App = () => {
    return (
        <Provider {...Stores}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        {authenticationSignUpRoute}
        {authenticationLoginRoute}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
    </Provider>
    );
};

export default App