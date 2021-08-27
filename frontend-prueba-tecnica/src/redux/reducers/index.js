import { combineReducers } from "redux";

import persons from "./persons";
import regions from "./regions";

const rootReducer = combineReducers({
  persons,
  regions,
});

export default rootReducer;

/*export default (state, action) =>
  rootReducer(action.type === "LOGOUT" ? undefined : state, action);*/
