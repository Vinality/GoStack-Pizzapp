import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { connectRouter, routerMiddleware } from "connected-react-router";
import reducers from "./ducks";
import sagas from "./sagas";
import history from "../history";

const middlewares = [];

const createAppropriateStore = createStore;

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);
middlewares.push(routerMiddleware(history));

const tronMiddleware =
  process.env.NODE_ENV === "development"
    ? console.tron.createEnhancer
    : () => {};

const store = createAppropriateStore(
  connectRouter(history)(reducers),
  compose(
    applyMiddleware(...middlewares),
    tronMiddleware()
  )
);

sagaMiddleware.run(sagas);

export default store;
