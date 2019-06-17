import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSagas from "./sagas";
import rootReducer from "./ducks";

const middlewares = [];
const sagaMonitor = process.env.NODE === 'development' ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middlewares.push(sagaMiddleware);

const tronMiddleware = __DEV__ ? console.tron.createEnhancer : () => {};

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    tronMiddleware(),
  ),
);

sagaMiddleware.run(rootSagas);

export default store;
