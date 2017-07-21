import React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { Actions, Scene } from 'react-native-router-flux';

import Signin from '../authentication/SignIn.react';
import PositionList from '../positions/List.react';
import PositionDisplay from '../positions/Display.react';
import ApplicantDisplay from '../positionRequests/Display.react';
import ApplicantAnswers from '../positionRequests/Answers.react';
import ApplicantMenu from '../positionRequests/ApplicantMenu.react';

import styles from '../../assets/styles/shared_styles';

const LoadingScreen = function LoadingScreen() {
  return <View />;
};

/* eslint-disable no-useless-escape*/
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
    <Scene
      key="applicant"
      component={ApplicantDisplay}
      getTitle={props => `Details for ${props.selectedApplicant.name}`}
      renderRightButton={props => <ApplicantMenu selectedApplicant={props.selectedApplicant} />}
    />
    <Scene
      key="answers"
      component={ApplicantAnswers}
      getTitle={props => `${props.selectedApplicant.name}\'s Answers`}
    />
  </Scene>
);
/* eslint-enable no-useless-escape*/

module.exports = scenes;
