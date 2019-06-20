import { combineReducers } from 'redux';

import user from './user'
import products from './products'
import type from './type'
import size from './size'
import cart from './cart'

export default combineReducers({
  user,
  products,
  type,
  size,
  cart
});
