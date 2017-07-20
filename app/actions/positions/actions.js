import { AsyncStorage } from 'react-native';
import * as actions from './constants';
import { positionsUrl } from '../urls';

export function getPositions() {
  return async (dispatch) => {
    dispatch({ type: actions.GET_POSITIONS_START });
    const token = (await AsyncStorage.getItem('auth_token')) || null;
    if (!token) throw new Error('No authentication token saved!');
    const headers = { Accept: 'application/json' };
    return fetch(`${positionsUrl}?authentication_token=${token}`, {
      method: 'GET',
      headers,
    })
      .then(resp => resp.json())
      .then(data => dispatch({ type: actions.GET_POSITIONS_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: actions.GET_POSITIONS_ERROR, error }));
  };
}

export function getPositionApplicants(positionId) {
  return async (dispatch) => {
    dispatch({ type: actions.GET_POSITION_APPLICANTS_START });
    const token = (await AsyncStorage.getItem('auth_token')) || null;
    if (!token) throw new Error('No authentication token saved!');
    const headers = { Accept: 'application/json' };
    return fetch(`${positionsUrl}/${String(positionId)}/applicants?authentication_token=${token}`, {
      method: 'GET',
      headers,
    })
      .then(resp => resp.json())
      .then(data => dispatch({ type: actions.GET_POSITION_APPLICANTS_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: actions.GET_POSITION_APPLICANTS_ERROR, error }));
  };
}
