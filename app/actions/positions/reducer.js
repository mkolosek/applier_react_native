import { Record } from 'immutable';
import * as actions from './constants';

const InitialState = Record({
  positions: [],
  applicants: [],
  busy: false,
});
const initialState = new InitialState();

export default function PositionReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
  switch (action.type) {
    case actions.GET_POSITIONS_START: {
      const newState = state.set('positions', []);
      return newState;
    }
    case actions.GET_POSITIONS_SUCCESS: {
      const newState = state.set('positions', action.payload);
      return newState;
    }
    case actions.GET_POSITION_APPLICANTS_START: {
      const newState = state.set('applicants', []);
      return newState;
    }
    case actions.GET_POSITION_APPLICANTS_SUCCESS: {
      const newState = state.set('applicants', action.payload);
      return newState;
    }
    case actions.REJECT_APPLICANT_START: {
      const newState = state.set('busy', true);
      return newState;
    }
    case actions.REJECT_APPLICANT_SUCCESS: {
      let newState = state.set(
        'applicants',
        state.applicants.filter(a => a.token !== action.payload),
      );
      newState = newState.set('busy', false);
      return newState;
    }
    case actions.IGNORE_APPLICANT_START: {
      const newState = state.set('busy', true);
      return newState;
    }
    case actions.IGNORE_APPLICANT_SUCCESS: {
      let newState = state.set(
        'applicants',
        state.applicants.filter(a => a.token !== action.payload),
      );
      newState = newState.set('busy', false);
      return newState;
    }
    default: {
      return state;
    }
  }
}
