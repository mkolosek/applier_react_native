import * as actions from '../positions/constants';
import { positionRequestsUrl } from '../urls';
import fetch from 'react-native-cancelable-fetch';
import { AsyncStorage } from 'react-native';

export function rejectApplicant(positionRequestId) {
  return async dispatch => {
    dispatch({ type: actions.REJECT_APPLICANT_START });
    let token = (await AsyncStorage.getItem('auth_token')) || null;
    if (!token) throw 'No authentication token saved!';
    let headers = { 'Content-Type': 'application/json' };
    let body = JSON.stringify({ id: positionRequestId, emailed_text: '' });
    return fetch(positionRequestsUrl + '/reject?authentication_token=' + token, {
      method: 'PUT',
      headers,
      body
    })
      .then(resp => {
        console.log(resp);
        return dispatch({ type: actions.REJECT_APPLICANT_SUCCESS, payload: positionRequestId });
      })
      .catch(error => {
        return dispatch({ type: actions.REJECT_APPLICANT_ERROR, error });
      });
  };
}
