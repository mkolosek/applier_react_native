import React, { Component } from 'react';
import { View } from 'react-native';

import { Actions, Scene, Router, Tabs } from 'react-native-router-flux';

class LoadingScreen extends Component {
  render() {
    return <View />;
  }
}

const scenes = Actions.create(
  <Scene key="root">
    <Scene type="replace" key="loading" component={LoadingScreen} initial={true} panHandlers={null} />
  </Scene>
);

module.exports = scenes;
