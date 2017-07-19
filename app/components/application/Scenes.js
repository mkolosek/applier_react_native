import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';

import Signin from '../authentication/SignIn.react';
import PositionList from '../positions/List.react';
import PositionDisplay from '../positions/Display.react';

import { Actions, Scene, Router, Tabs } from 'react-native-router-flux';

import styles from '../../assets/styles/shared_styles';

class LoadingScreen extends Component {
  render() {
    return <View />;
  }
}

const scenes = (
  <Scene key="root">
    <Scene type="replace" key="loading" component={LoadingScreen} initial={true} hideNavBar={true} />
    <Scene type="replace" key="signin" component={Signin} hideNavBar={true} />
    <Scene
      type="replace"
      key="home"
      component={PositionList}
      title="Your Positions"
      renderRightButton={() => {
        return (
          <View>
            <TouchableOpacity
              style={styles.auth.logOutBtn}
              onPress={() => AsyncStorage.removeItem('auth_token').then(() => Actions.signin())}
            >
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
    <Scene
      key="position"
      component={PositionDisplay}
      getTitle={props => props.selectedPosition.title + ' Applicants'}
    />
  </Scene>
);

module.exports = scenes;
