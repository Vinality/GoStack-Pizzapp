import React from "react";
import Login from "./Pages/Login";
import "./config/reactotron";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import "./styles.css";
import store from './store';
import history from './history';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
