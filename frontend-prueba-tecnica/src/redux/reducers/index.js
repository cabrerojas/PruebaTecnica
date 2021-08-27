import { combineReducers } from "redux";

import persons from "./persons";
import regions from "./regions";
import logs from "./logs";

const rootReducer = combineReducers({
  persons,
  regions,
  logs,
});

export default rootReducer;

/*export default (state, action) =>
  rootReducer(action.type === "LOGOUT" ? undefined : state, action);*/
