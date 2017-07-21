import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { positionRequestsUrl } from '../../urls';
import {
  REJECT_APPLICANT_START,
  REJECT_APPLICANT_SUCCESS,
  IGNORE_APPLICANT_START,
  IGNORE_APPLICANT_SUCCESS,
} from '../../positions/constants';

jest.autoMockOff();

jest.setMock('AsyncStorage', {
  getItem: jest.fn().mockReturnValue(
    /* eslint-disable no-unused-vars*/
    new Promise((resolve, reject) => {
      /* eslint-enable no-unused-vars*/
      resolve('test-token');
    }),
  ),

  setItem: jest.fn(),
});

const expect = require('expect');
const fetchMock = require('fetch-mock');

const { rejectApplicant, ignoreApplicant } = require('../actions');

const mockStore = configureMockStore([thunk]);

describe('position request actions', () => {
  const positionRequestId = 'test-position-request';
  const rejectApplicantStart = { type: REJECT_APPLICANT_START };
  const rejectApplicantSuccess = { type: REJECT_APPLICANT_SUCCESS, payload: positionRequestId };
  const ignoreApplicantStart = { type: IGNORE_APPLICANT_START };
  const ignoreApplicantSuccess = { type: IGNORE_APPLICANT_SUCCESS, payload: positionRequestId };

  it('rejects position request if call is successful', () => {
    fetchMock.mock(`${positionRequestsUrl}/reject`, 'PUT', '').getMock();

    const store = mockStore({ positions: {} });

    return store
      .dispatch(rejectApplicant(positionRequestId))
      .then(() => {
        expect(store.getActions()).toEqual([rejectApplicantStart, rejectApplicantSuccess]);
      })
      .then(fetchMock.restore);
  });

  it('ignores position request if call is successful', () => {
    fetchMock.mock(`${positionRequestsUrl}/ignore`, 'PUT', '').getMock();

    const store = mockStore({ positions: {} });

    return store
      .dispatch(ignoreApplicant(positionRequestId))
      .then(() => {
        expect(store.getActions()).toEqual([ignoreApplicantStart, ignoreApplicantSuccess]);
      })
      .then(fetchMock.restore);
  });
});
