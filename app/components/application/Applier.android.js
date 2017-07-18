'use strict';

import React, { Component } from 'react';
import { Linking, View, AsyncStorage, Alert, BackAndroid, Text } from 'react-native';
import { Actions, Scene, Router, Tabs } from 'react-native-router-flux';
import scenes from './Scenes.js';
import { EventEmitter } from 'events';

//actions
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPositions } from '../../actions/Positions';

BackAndroid.addEventListener('hardwareBackPress', () => {
  try {
    console.log(Actions.pop());
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
    this.loggedIn = undefined;
    AsyncStorage.getItem('auth_token')
      .then(token => {
        if (token) {
          this.loggedIn = true;
          Actions.home();
        } else {
          this.loggedIn = false;
          Actions.signin();
        }
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.loggedIn) this.props.getPositions();
    }, 3000);
  }

  userIsSignedIn() {
    return !(this.props.scene.name == 'signin' || this.props.scene.name == 'loading');
  }

  render() {
    const isUserSignedIn = this.userIsSignedIn();
    return (
      <View style={{ flex: 1 }}>
        <RouterWithRedux hideNavBar={true}>
          {scenes}
        </RouterWithRedux>
      </View>
    );
  }
}

const stateToProps = state => {
  return {
    scene: state.routes.scene
  };
};

const dispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getPositions
    },
    dispatch
  );
};

export default connect(stateToProps, dispatchToProps)(RootRouter);
