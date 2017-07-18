import React, { Component } from 'react';
import { View } from 'react-native';

import Signin from '../authentication/SignIn.react';
import PositionList from '../positions/List.react';
import PositionDisplay from '../positions/Display.react';

import { Actions, Scene, Router, Tabs } from 'react-native-router-flux';

class LoadingScreen extends Component {
  render() {
    return <View />;
  }
}

const scenes = (
  <Scene key="root">
    <Scene type="replace" key="loading" component={LoadingScreen} initial={true} panHandlers={null} />
    <Scene type="replace" key="signin" component={Signin} panHandlers={null} />
    <Scene type="replace" key="home" component={PositionList} panHandlers={null} />
    <Scene type="replace" key="position" component={PositionDisplay} panHandlers={null} />
  </Scene>
);

module.exports = scenes;
