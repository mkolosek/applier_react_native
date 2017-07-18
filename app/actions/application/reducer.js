'use strict';
import { combineReducers } from 'redux';
import signin from '../authentication/signin/reducer';
import routes from './routes';
import positions from '../../reducers/PositionReducer';

export default combineReducers({
  routes,
  signin,
  positions
});
