import React from 'react';
import { Record } from 'immutable';

import * as actions from './constants';

const InitialState = Record({
  positions: [],
  selectedPosition: {},
  applicants: [],
  busy: false
});
const initialState = new InitialState();

export default function PositionReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
  switch (action.type) {
    case actions.GET_POSITIONS_START: {
      state = state.set('positions', []);
      return state;
    }
    case actions.GET_POSITIONS_SUCCESS: {
      state = state.set('positions', action.payload);
      return state;
    }
    case actions.GET_POSITION_APPLICANTS_START: {
      state = state.set('applicants', []);
      return state;
    }
    case actions.GET_POSITION_APPLICANTS_SUCCESS: {
      state = state.set('applicants', action.payload);
      return state;
    }
    case actions.REJECT_APPLICANT_START: {
      state = state.set('busy', true);
      return state;
    }
    case actions.REJECT_APPLICANT_SUCCESS: {
      state = state.set('applicants', state.applicants.filter(a => a.token != action.payload));
      state = state.set('busy', false);
      return state;
    }
    default: {
      return state;
    }
  }
}
