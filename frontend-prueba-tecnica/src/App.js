import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PersonIndex from "./views/Persons/PersonsIndex";
import PersonForm from "./components/Persons/PersonForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { CLEAN_MESSAGES } from "./constants/actionsTypes";

function App() {
  const dispatch = useDispatch();

  const notifyError = (message) => toast.error(message);
  const notifySuccess = (message) => toast.success(message);

  const message = useSelector((state) => state.logs.message);
  const errorMessage = useSelector((state) => state.logs.errorMessage);

  useEffect(() => {
    if (errorMessage) {
      notifyError(errorMessage);
    }
    if (message) {
      notifySuccess(message);
    }
    dispatch({ type: CLEAN_MESSAGES, payload: "" });
  }, [errorMessage, message]);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PersonIndex}></Route>
          <Route exact path="/persons" component={PersonIndex}></Route>
          <Route exact path="/person/:id" component={PersonForm}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
