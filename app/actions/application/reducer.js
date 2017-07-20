import { combineReducers } from 'redux';
import routes from './routes';
import signin from '../authentication/signin/reducer';
import positions from '../positions/reducer';
import positionRequests from '../positionRequests/reducer';

export default combineReducers({
  positions,
  positionRequests,
  routes,
  signin,
});
