import { all } from "redux-saga/effects";

import searchWatcher from "./search.saga.js";

export default function* rootSaga() {
  yield all([
    searchWatcher(),
  ]);
}
