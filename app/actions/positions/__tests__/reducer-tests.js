import {
  GET_POSITIONS_SUCCESS,
  GET_POSITION_APPLICANTS_SUCCESS,
  REJECT_APPLICANT_START,
  REJECT_APPLICANT_SUCCESS,
  IGNORE_APPLICANT_START,
  IGNORE_APPLICANT_SUCCESS,
} from '../constants';
import positionsReducer from '../reducer';

jest.autoMockOff();

const expect = require('expect');

const positions = [{ id: 1, title: 'Test 1' }];
const applicants = [{ id: 1, email: 'test1@email.com', token: 'test-token-1' }];
const InitialStateHash = {
  positions: [],
  applicants: [],
  busy: false,
};
const StatePositions = {
  positions,
  applicants: [],
  busy: false,
};
const StateApplicants = {
  positions: [],
  applicants,
  busy: false,
};
const StateApplicantRejectStart = {
  positions: [],
  applicants: [],
  busy: true,
};
const StateApplicantRejectSuccess = {
  positions: [],
  applicants: [],
  busy: false,
};
const StateApplicantIgnoreStart = {
  positions: [],
  applicants: [],
  busy: true,
};
const StateApplicantIgnoreSuccess = {
  positions: [],
  applicants: [],
  busy: false,
};

describe('positions reducer', () => {
  it('should return initial state if action undefined', () => {
    const state = positionsReducer(undefined, { type: 'RANDOM_ACTION' });
    expect(JSON.stringify(state)).toEqual(JSON.stringify(InitialStateHash));
  });

  it('should set positions on get positions success', () => {
    const state = positionsReducer(undefined, { type: GET_POSITIONS_SUCCESS, payload: positions });
    expect(JSON.stringify(state)).toEqual(JSON.stringify(StatePositions));
  });

  it('should set applicants on get position applicants success', () => {
    const state = positionsReducer(undefined, {
      type: GET_POSITION_APPLICANTS_SUCCESS,
      payload: applicants,
    });
    expect(JSON.stringify(state)).toEqual(JSON.stringify(StateApplicants));
  });

  it('should set busy on reject applicant start', () => {
    const state = positionsReducer(undefined, {
      type: REJECT_APPLICANT_START,
    });
    expect(JSON.stringify(state)).toEqual(JSON.stringify(StateApplicantRejectStart));
  });

  it('should reset busy and update applicants on reject applicant success', () => {
    positionsReducer(undefined, {
      type: GET_POSITION_APPLICANTS_SUCCESS,
      payload: applicants,
    });

    const state = positionsReducer(undefined, {
      type: REJECT_APPLICANT_SUCCESS,
      payload: 'test-token-1',
    });

    expect(JSON.stringify(state)).toEqual(JSON.stringify(StateApplicantRejectSuccess));
  });

  it('should set busy on ignore applicant start', () => {
    const state = positionsReducer(undefined, {
      type: IGNORE_APPLICANT_START,
    });
    expect(JSON.stringify(state)).toEqual(JSON.stringify(StateApplicantIgnoreStart));
  });

  it('should reset busy and update applicants on ignore applicant success', () => {
    positionsReducer(undefined, {
      type: GET_POSITION_APPLICANTS_SUCCESS,
      payload: applicants,
    });

    const state = positionsReducer(undefined, {
      type: IGNORE_APPLICANT_SUCCESS,
      payload: 'test-token-1',
    });

    expect(JSON.stringify(state)).toEqual(JSON.stringify(StateApplicantIgnoreSuccess));
  });
});
