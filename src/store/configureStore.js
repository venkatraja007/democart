import 'regenerator-runtime/runtime'
import createSagaMiddleware from "redux-saga";
import { fromJS } from "immutable";
import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducers";
import sagas from "../sagas"; // TODO: Next step
const sagaMiddleware = createSagaMiddleware();
//  Returns the store instance
// It can  also take initialState argument when provided
export default function configureStore(initialState, history) {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
      ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({
          // shouldHotReload: false
          deserializeState: state =>
            Object.keys(state).reduce((previous, current) => {
              previous[current] = fromJS(state[current]);
              return previous;
            }, {})
        })
      : compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(sagas);
  store["runSaga"] = sagaMiddleware.run;
  return store;
}
