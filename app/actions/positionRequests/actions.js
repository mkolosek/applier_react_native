import { AsyncStorage } from 'react-native';
import * as positionActions from '../positions/constants';
import * as actions from './constants';
import { positionRequestsUrl } from '../urls';

export function rejectApplicant(positionRequestId) {
  return async (dispatch) => {
    dispatch({ type: positionActions.REJECT_APPLICANT_START });
    const token = (await AsyncStorage.getItem('auth_token')) || null;
    if (!token) throw new Error('No authentication token saved!');
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify({
      authentication_token: token,
      id: positionRequestId,
      emailed_text: '',
    });
    return (
      fetch(`${positionRequestsUrl}/reject`, {
        method: 'PUT',
        headers,
        body,
      })
        /* eslint-disable no-unused-vars*/
        .then(resp =>
          /* eslint-enable no-unused-vars*/
          dispatch({ type: positionActions.REJECT_APPLICANT_SUCCESS, payload: positionRequestId }),
        )
        .catch(error => dispatch({ type: positionActions.REJECT_APPLICANT_ERROR, error }))
    );
  };
}

export function ignoreApplicant(positionRequestId) {
  return async (dispatch) => {
    dispatch({ type: positionActions.IGNORE_APPLICANT_START });
    const token = (await AsyncStorage.getItem('auth_token')) || null;
    if (!token) throw new Error('No authentication token saved!');
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify({
      authentication_token: token,
      id: positionRequestId,
    });
    return (
      fetch(`${positionRequestsUrl}/ignore`, {
        method: 'PUT',
        headers,
        body,
      })
        /* eslint-disable no-unused-vars*/
        .then(resp =>
          /* eslint-enable no-unused-vars*/
          dispatch({ type: positionActions.IGNORE_APPLICANT_SUCCESS, payload: positionRequestId }),
        )
        .catch(error => dispatch({ type: positionActions.IGNORE_APPLICANT_ERROR, error }))
    );
  };
}

export function getApplicantMessages(positionRequestId) {
  return async (dispatch) => {
    dispatch({ type: actions.GET_APPLICANT_MESSAGES_START });
    const token = (await AsyncStorage.getItem('auth_token')) || null;
    if (!token) throw new Error('No authentication token saved!');
    const headers = { Accept: 'application/json' };
    return fetch(
      `${positionRequestsUrl}/${positionRequestId}/comments?authentication_token=${token}`,
      {
        method: 'GET',
        headers,
      },
    )
      .then(resp => resp.json())
      .then(data => dispatch({ type: actions.GET_APPLICANT_MESSAGES_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: actions.GET_APPLICANT_MESSAGES_ERROR, error }));
  };
}

export function sendApplicantMessage(positionRequestId, contents) {
  return async (dispatch) => {
    dispatch({ type: actions.CREATE_APPLICANT_MESSAGE_START });
    const token = (await AsyncStorage.getItem('auth_token')) || null;
    if (!token) throw new Error('No authentication token saved!');
    const headers = { Accept: 'application/json', 'Content-Type': 'application/json' };
    const body = JSON.stringify({
      authentication_token: token,
      id: positionRequestId,
      comment: contents,
    });
    return fetch(`${positionRequestsUrl}/comment?authentication_token=${token}`, {
      method: 'POST',
      headers,
      body,
    })
      .then(resp => resp.json())
      .then(data => dispatch({ type: actions.CREATE_APPLICANT_MESSAGE_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: actions.CREATE_APPLICANT_MESSAGE_ERROR, error }));
  };
}
