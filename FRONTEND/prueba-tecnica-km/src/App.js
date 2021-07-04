import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Persona from "./pages/Persona";
import PersonaForm from "./pages/PersonaForm";
import Layout from "./components/layout/Layout";
import GlobalNotifications from "./components/common/globalNotifications";

function App() {
  return (
    <Layout>
      <GlobalNotifications></GlobalNotifications>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/persona" exact component={Persona} />
        <Route path="/persona/:id" exact component={PersonaForm} />
      </Switch>
    </Layout>
  );
}

export default App;
