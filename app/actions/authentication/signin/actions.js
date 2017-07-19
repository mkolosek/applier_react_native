'use strict';
import { AsyncStorage } from 'react-native';
import * as ACTIONS from './constants';
import { EventEmitter } from 'events';
import { signInUrl } from '../../urls';

export const signIn = (email, password) => dispatch => _signIn(dispatch, email, password);

const handleAsyncStorage = async function(data) {
  if (data.errors) throw data.errors;
  await AsyncStorage.setItem('auth_token', data.auth_token, () => {
    return data;
  });
  return data;
};

const _signIn = (dispatch, email, password) => {
  dispatch(_signinStart());
  return fetch(signInUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_login: {
        email,
        password
      }
    })
  })
    .then(resp => {
      if (resp.status === 401) {
        throw new Error('Incorrect email or password');
      }
      return resp.json();
    })
    .then(handleAsyncStorage)
    .then(data => {
      dispatch(_signinSuccessful(data));
    })
    .catch(err => {
      dispatch(_signinError(err));
    });
};

const _signinStart = () => ({ type: ACTIONS.SIGNIN_START });
const _signinSuccessful = response => ({ type: ACTIONS.SIGNIN_SUCCESS, response: response });
const _signinError = error => ({ type: ACTIONS.SIGNIN_ERROR, error: error });
