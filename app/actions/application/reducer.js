'use strict';
import { combineReducers } from 'redux';
import routes from './routes';
import signin from '../authentication/signin/reducer';
import positions from '../positions/reducer';

export default combineReducers({
  positions,
  routes,
  signin
});
