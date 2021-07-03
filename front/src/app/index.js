import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ListadoPersonas from "./dashboard/ListadoPersonas";
import AltaPersona from "./dashboard/AltaPersona";
import { withRouter } from "react-router";

const Routes = () => (
  <Switch>
    <Route exact path={"/listado-personas"} component={ListadoPersonas} />
    <Route exact path={"/alta-personas"} component={AltaPersona} />
    <Redirect from="/" to="/listado-personas" />
  </Switch>
);

export default withRouter(Routes);
