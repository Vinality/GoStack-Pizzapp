import './config/reactotron'

import React from "react";
import { Provider } from "react-redux";

import store from './store';
import Routes from './routes';
import { setNavigation } from './services/navigation'

const App = () => (
  <Provider store={store}>
    <Routes ref={setNavigation}/>
  </Provider>
);

export default App;
