import { combineReducers } from 'redux';

import user from './user'
import products from './products'
import type from './type'

export default combineReducers({
  user,
  products,
  type
});
