import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import DefaultPage from "./pages/DefaultPage";

import Home from "./components/Home";

function Router() {
  /*
          <Route
          path="/"
          render={(props) => (
            <DefaultPage {...props} component={Home} title="Maestro Delivery" />
          )}
        />
        */
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={props => <Redirect to="/home"/>}/>
        
        <Route path="/home" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
