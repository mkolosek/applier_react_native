import { AsyncStorage } from 'react-native';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { signInUrl } from '../../../urls';
import { SIGNIN_START, SIGNIN_SUCCESS, SIGNIN_ERROR } from '../constants';
import signIn from '../actions';

jest.autoMockOff();

const expect = require('expect');
const sinon = require('sinon');
const fetchMock = require('fetch-mock');

const mockStore = configureMockStore([thunk]);

describe('signin actions', () => {
  const email = 'test@email.com';
  const password = 'password';
  const response = { error_message: 'test error', error: 400 };
  const signInStart = { type: SIGNIN_START };
  const signInSuccess = {
    type: SIGNIN_SUCCESS,
    response: { authentication_token: 'test-authentication-token' },
  };
  const signInErrors = { type: SIGNIN_ERROR, error: response };
  const createSession = sinon.spy(AsyncStorage, 'setItem');

  it('displays error if user does not exists', () => {
    fetchMock.mock(signInUrl, 'POST', { response_type: 'error', response }).getMock();

    const store = mockStore({ signin: {} });

    return store
      .dispatch(signIn(email, password))
      .then(() => {
        // does not create session
        expect(createSession.called).toEqual(false);
        // returns correct value
        expect(store.getActions()).toEqual([signInStart, signInErrors]);
      })
      .then(fetchMock.restore);
  });

  it('creates session if user exists', () => {
    fetchMock
      .mock(signInUrl, 'POST', { authentication_token: 'test-authentication-token' })
      .getMock();

    const store = mockStore({ signin: {} });

    return store
      .dispatch(signIn(email, password))
      .then(() => {
        // creates session
        expect(createSession.calledOnce).toEqual(true);
        expect(createSession.firstCall.args[0]).toEqual('auth_token');
        expect(createSession.firstCall.args[1]).toEqual('test-authentication-token');
        // returns correct value
        expect(store.getActions()).toEqual([signInStart, signInSuccess]);
      })
      .then(fetchMock.restore);
  });
});
