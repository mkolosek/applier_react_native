import React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { Actions, Scene } from 'react-native-router-flux';

import Signin from '../authentication/SignIn.react';
import PositionList from '../positions/List.react';
import PositionDisplay from '../positions/Display.react';
import ApplicantDisplay from '../positionRequests/Display.react';
import { rejectApplicant } from '../../actions/positionRequests/actions';

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
    <Scene
      key="applicant"
      component={ApplicantDisplay}
      getTitle={props => `Details for ${props.selectedApplicant.name}`}
      renderRightButton={props =>
        (<View>
          <TouchableOpacity
            onPress={() => {
              rejectApplicant(props.selectedApplicant.token)(props.dispatch);
              Actions.pop();
            }}
          >
            <Text style={[styles.positions.applicantRejectBtn, styles.positions.rejectEnabled]}>
              Reject
            </Text>
          </TouchableOpacity>
        </View>)}
    />
  </Scene>
);

module.exports = scenes;
