import { Record } from 'immutable';
import * as actions from './constants';

const InitialState = Record({
  messages: [],
});
const initialState = new InitialState();

export default function PositionReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
  switch (action.type) {
    case actions.GET_APPLICANT_MESSAGES_START: {
      const newState = state.set('messages', []);
      return newState;
    }
    case actions.GET_APPLICANT_MESSAGES_SUCCESS: {
      const newState = state.set('messages', action.payload);
      return newState;
    }
    case actions.CREATE_APPLICANT_MESSAGE_SUCCESS: {
      const newState = state.set('messages', [action.payload, ...state.messages]);
      return newState;
    }
    default: {
      return state;
    }
  }
}
