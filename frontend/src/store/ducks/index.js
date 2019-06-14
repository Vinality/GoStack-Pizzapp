import { combineReducers } from "redux";
import history from '../../history'
import user from "./user";
import { connectRouter } from "connected-react-router";

const reducers = combineReducers({
  router: connectRouter(history),
  user,
});

export default reducers;
