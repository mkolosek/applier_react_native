'use strict';

import React, { Component } from 'react';
import { Linking, View, AsyncStorage, Alert, BackAndroid, Text } from 'react-native';
import { Actions, Scene, Router, Tabs } from 'react-native-router-flux';
import scenes from './Scenes.js';
import { EventEmitter } from 'events';

//actions
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPositions } from '../../actions/positions/actions';

BackAndroid.addEventListener('hardwareBackPress', () => {
  try {
    Actions.pop();
    return true;
  } catch (err) {
    return false;
  }
});

const RouterWithRedux = connect()(Router);

export class RootRouter extends Component {
  constructor(props) {
    super(props);
    EventEmitter.prototype.setMaxListeners(0);
    AsyncStorage.getItem('auth_token')
      .then(token => {
        if (token) {
          Actions.home();
        } else {
          Actions.signin();
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <RouterWithRedux hideNavBar={true}>
          {scenes}
        </RouterWithRedux>
      </View>
    );
  }
}

const dispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getPositions
    },
    dispatch
  );
};

export default connect(null, dispatchToProps)(RootRouter);
