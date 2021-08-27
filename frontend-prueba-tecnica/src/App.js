import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import PersonIndex from "./views/Persons/PersonsIndex";
import PersonForm from "./components/Persons/PersonForm";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/persons" component={PersonIndex}></Route>
        <Route exact path="/person/:id" component={PersonForm}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
