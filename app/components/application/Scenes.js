import React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { Actions, Scene } from 'react-native-router-flux';

import Signin from '../authentication/SignIn.react';
import PositionList from '../positions/List.react';
import PositionDisplay from '../positions/Display.react';

import styles from '../../assets/styles/shared_styles';

/* eslint-disable no-unused-vars*/
const LoadingScreen = function LoadingScreen(props, context) {
  /* eslint-enable no-unused-vars*/
  return <View />;
};

const scenes = (
  <Scene key="root">
    <Scene type="replace" key="loading" component={LoadingScreen} initial hideNavBar />
    <Scene type="replace" key="signin" component={Signin} hideNavBar />
    <Scene
      type="replace"
      key="home"
      component={PositionList}
      title="Your Positions"
      renderRightButton={() =>
        (<View>
          <TouchableOpacity
            style={styles.auth.logOutBtn}
            onPress={() => AsyncStorage.removeItem('auth_token').then(() => Actions.signin())}
          >
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>)}
    />
    <Scene
      key="position"
      component={PositionDisplay}
      getTitle={props => `${props.selectedPosition.title} Applicants`}
    />
  </Scene>
);

module.exports = scenes;
