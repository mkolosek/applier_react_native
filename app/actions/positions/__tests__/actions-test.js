import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { positionsUrl } from '../../urls';
import {
  GET_POSITIONS_START,
  GET_POSITIONS_SUCCESS,
  GET_POSITION_APPLICANTS_START,
  GET_POSITION_APPLICANTS_SUCCESS,
} from '../constants';

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

const { getPositions, getPositionApplicants } = require('../actions');

const mockStore = configureMockStore([thunk]);

describe('position actions', () => {
  const positions = [
    {
      id: 1,
      title: 'Test 1',
    },
    {
      id: 2,
      title: 'Test 2',
    },
    {
      id: 3,
      title: 'Test 3',
    },
  ];
  const positionId = '1';
  const applicants = [
    {
      id: 1,
      email: 'test1@email.com',
      token: 'token1',
    },
    {
      id: 2,
      email: 'test2@email.com',
      token: 'token2',
    },
    {
      id: 3,
      email: 'test3@email.com',
      token: 'token3',
    },
  ];
  const getPositionsStart = { type: GET_POSITIONS_START };
  const getPositionsSuccess = { type: GET_POSITIONS_SUCCESS, payload: positions };
  const getPositionApplicantsStart = { type: GET_POSITION_APPLICANTS_START };
  const getPositionApplicantsSuccess = {
    type: GET_POSITION_APPLICANTS_SUCCESS,
    payload: applicants,
  };

  it('returns all positions ', () => {
    fetchMock
      .mock(`${positionsUrl}?authentication_token=test-token`, 'GET', JSON.stringify(positions))
      .getMock();

    const store = mockStore({ positions: {} });

    return store
      .dispatch(getPositions())
      .then(() => {
        expect(store.getActions()).toEqual([getPositionsStart, getPositionsSuccess]);
      })
      .then(fetchMock.restore);
  });

  it('rejects position request if call is successful', () => {
    fetchMock
      .mock(
        `${positionsUrl}/${positionId}/applicants?authentication_token=test-token`,
        'GET',
        JSON.stringify(applicants),
      )
      .getMock();

    const store = mockStore({ positions: {} });

    return store
      .dispatch(getPositionApplicants(positionId))
      .then(() => {
        expect(store.getActions()).toEqual([
          getPositionApplicantsStart,
          getPositionApplicantsSuccess,
        ]);
      })
      .then(fetchMock.restore);
  });
});
