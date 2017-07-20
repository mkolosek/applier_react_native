import React, { Component } from 'react';
import { UIManager } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
// middleware
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './actions/application/reducer';
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions*/
import Application from './components/application/Applier';
/* eslint-enable import/extensions*/
/* eslint-enable import/no-unresolved*/

const logger = createLogger();
const middleware = [thunk, logger];
const store = compose(applyMiddleware(...middleware))(createStore)(rootReducer);

export default class Applier extends Component {
  constructor(props) {
    super(props);
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}
