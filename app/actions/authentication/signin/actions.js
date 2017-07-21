import { AsyncStorage } from 'react-native';
import * as ACTIONS from './constants';
import { signInUrl } from '../../urls';

const handleAsyncStorage = async function handleAsyncStorage(data) {
  if (data.response_type === 'error') throw data.response;
  await AsyncStorage.setItem('auth_token', data.authentication_token, () => data);
  return data;
};

const signinStart = () => ({ type: ACTIONS.SIGNIN_START });
const signinSuccessful = response => ({ type: ACTIONS.SIGNIN_SUCCESS, response });
const signinError = error => ({ type: ACTIONS.SIGNIN_ERROR, error });

const signIn = (dispatch, email, password) => {
  dispatch(signinStart());
  return fetch(signInUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then(resp => resp.json())
    .then(handleAsyncStorage)
    .then((data) => {
      dispatch(signinSuccessful(data));
    })
    .catch((err) => {
      dispatch(signinError(err));
    });
};

export default (email, password) => dispatch => signIn(dispatch, email, password);
