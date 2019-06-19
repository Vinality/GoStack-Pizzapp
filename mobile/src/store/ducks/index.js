import { combineReducers } from 'redux';

import user from './user'
import products from './products'

export default combineReducers({
  user,
  products
});
