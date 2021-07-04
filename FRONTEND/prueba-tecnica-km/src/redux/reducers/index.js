import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import personsReducer from "./personsReducer";
import {reducer as notifications} from 'react-notification-system-redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    notifications,
    personsReducer,
  });
