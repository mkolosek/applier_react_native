import React, { Component } from 'react';
import { UIManager, Platform } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './actions/application/reducer';
import Application from './components/application/Applier';
//middleware
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const middleware = [thunk, logger];
const store = compose(applyMiddleware(...middleware))(createStore)(rootReducer);

export default class Applier extends Component {
  constructor(props) {
    super(props);
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}
