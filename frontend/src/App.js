import React from "react";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import "./config/reactotron";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import store from './store';
import history from './history';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ToastContainer />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
