import { SIGNIN_SUCCESS, SIGNIN_ERROR } from '../constants';

jest.autoMockOff();

const expect = require('expect');
const signinReducer = require('../reducer');

const errors = [{ detail: 'test error', status: '400', title: 'bad request' }];
const InitialStateHash = { error: null };
const StateError = { error: errors };

describe('signin reducer', () => {
  it('should return initial state if action undefined', () => {
    const state = signinReducer(undefined, { type: 'FETCH_START' });
    expect(JSON.stringify(state)).toEqual(JSON.stringify(InitialStateHash));
  });

  it('should set error if error while signing in', () => {
    const state = signinReducer(undefined, { type: SIGNIN_ERROR, error: errors });
    expect(JSON.stringify(state)).toEqual(JSON.stringify(StateError));
  });

  it('should remove error on signin success', () => {
    let state = signinReducer(undefined, { type: SIGNIN_ERROR, error: errors });
    state = signinReducer(state, { type: SIGNIN_SUCCESS });
    expect(JSON.stringify(state)).toEqual(JSON.stringify(InitialStateHash));
  });
});
