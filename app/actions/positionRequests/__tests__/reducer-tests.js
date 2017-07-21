import { GET_APPLICANT_MESSAGES_SUCCESS, CREATE_APPLICANT_MESSAGE_SUCCESS } from '../constants';
import positionRequestsReducer from '../reducer';

jest.autoMockOff();

const expect = require('expect');

const messages = [
  {
    id: 1,
    comment: 'Test Comment',
    user_id: 1,
    seen_at: null,
    display_name: 'TestUser',
    created_at: new Date('2017-07-21'),
  },
];
const InitialStateHash = {
  messages: [],
};
const StateMessagesSuccess = {
  messages,
};
const StateMessageCreate = {
  messages,
};

describe('position requests reducer', () => {
  it('should return initial state if action undefined', () => {
    const state = positionRequestsReducer(undefined, { type: 'RANDOM_ACTION' });
    expect(JSON.stringify(state)).toEqual(JSON.stringify(InitialStateHash));
  });

  it('should set applicants on get position applicants success', () => {
    const state = positionRequestsReducer(undefined, {
      type: GET_APPLICANT_MESSAGES_SUCCESS,
      payload: messages,
    });
    expect(JSON.stringify(state)).toEqual(JSON.stringify(StateMessagesSuccess));
  });

  it('should add the new message on create message success', () => {
    const state = positionRequestsReducer(undefined, {
      type: CREATE_APPLICANT_MESSAGE_SUCCESS,
      payload: messages[0],
    });

    expect(JSON.stringify(state)).toEqual(JSON.stringify(StateMessageCreate));
  });
});
