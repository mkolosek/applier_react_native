import { AsyncStorage } from 'react-native';
import * as actions from '../positions/constants';
import { positionRequestsUrl } from '../urls';

/* eslint-disable import/prefer-default-export*/
export function rejectApplicant(positionRequestId) {
  return async (dispatch) => {
    dispatch({ type: actions.REJECT_APPLICANT_START });
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
          dispatch({ type: actions.REJECT_APPLICANT_SUCCESS, payload: positionRequestId }),
        )
        .catch(error => dispatch({ type: actions.REJECT_APPLICANT_ERROR, error }))
    );
  };
}
/* eslint-enable import/prefer-default-export*/
