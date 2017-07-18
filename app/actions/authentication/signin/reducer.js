import React from "react";
import { Record, Seq } from 'immutable';
import * as actions from './constants';
import Error from '../../../utils/records/Error';

const InitialState = Record({
  error: null
});
const initialState = new InitialState;

export default function signinReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

  switch (action.type) {
    case "SIGN_OUT_SUCCESS":
      return initialState;
    case actions.SIGNIN_SUCCESS:
      return state.delete("error");
    case actions.SIGNIN_ERROR:
      const list = Seq(action.error)
          .map(json => new Error(json))
          .toList();
      return state.set("error", list);
  }

  return state;
}

module.exports = signinReducer
