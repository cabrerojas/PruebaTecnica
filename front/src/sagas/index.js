import { all } from "redux-saga/effects";
import persona from "./persona";

export default function* rootSaga(getState) {
  yield all([persona()]);
}
