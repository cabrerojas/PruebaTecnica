import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddPersona from "./components/AddPersona";
import Persona from "./components/Persona";
import PersonasList from "./components/PersonasList";

function App() {

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/personas" className="navbar-brand">
          Personas
        </a>
        <Link to={"/add"} className="navbar-brand">
          Agregar
        </Link>

      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/personas"]} component={PersonasList} />
          <Route exact path="/add" component={AddPersona} />
          <Route path="/personas/:id" component={Persona} />
        </Switch>
      </div>
    </div>
  );

}

export default App;

