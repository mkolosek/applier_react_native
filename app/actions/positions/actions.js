'use strict';
import * as actions from './constants';
import { positionsUrl } from '../urls';
import fetch from 'react-native-cancelable-fetch';
import { AsyncStorage } from 'react-native';

export function getPositions() {
  return async dispatch => {
    dispatch({ type: actions.GET_POSITIONS_START });
    let token = (await AsyncStorage.getItem('auth_token')) || null;
    if (!token) throw 'No authentication token saved!';
    let headers = { Accept: 'application/json' };
    return fetch(positionsUrl + '?authentication_token=' + token, {
      method: 'GET',
      headers
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        return dispatch({ type: actions.GET_POSITIONS_SUCCESS, payload: data });
      })
      .catch(error => {
        return dispatch({ type: actions.GET_POSITIONS_ERROR, error });
      });
  };
}

export function getPositionApplicants(positionId) {
  return async dispatch => {
    dispatch({ type: actions.GET_POSITION_APPLICANTS_START });
    let token = (await AsyncStorage.getItem('auth_token')) || null;
    if (!token) throw 'No authentication token saved!';
    let headers = { Accept: 'application/json' };
    return fetch(positionsUrl + '/' + String(positionId) + '/applicants?authentication_token=' + token, {
      method: 'GET',
      headers
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        return dispatch({ type: actions.GET_POSITION_APPLICANTS_SUCCESS, payload: data });
      })
      .catch(error => {
        return dispatch({ type: actions.GET_POSITION_APPLICANTS_ERROR, error });
      });
  };
}
