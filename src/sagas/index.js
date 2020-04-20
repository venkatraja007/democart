import { fork } from "redux-saga/effects";
import getAllRequests from "./watcher";

// Here, we register our watcher saga(s) and export as a single generator
// function (startForeman) as our root Saga.
export default function* main() {
  yield fork(getAllRequests);
}
