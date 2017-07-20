import { ActionConst } from 'react-native-router-flux';
import { Record } from 'immutable';

const InitialState = Record({
  scene: {},
});

const initialState = new InitialState();

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionConst.REPLACE:
    case ActionConst.BACK:
    case ActionConst.BACK_ACTION:
      return state;
    case ActionConst.FOCUS:
      return state.set('scene', action.scene);
    default:
      return state;
  }
}
