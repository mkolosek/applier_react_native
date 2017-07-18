'use strict';

import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Alert,
  AsyncStorage,
  Keyboard,
  Platform,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosition } from '../../actions/Positions';

const top = 0;

export class Display extends Component {
  selectPosition(positionId) {
    this.props.getPosition();
    Actions.position();
  }

  render() {
    var applicantRows = [];
    this.props.applicants.forEach(applicant => {
      let key = 'appl-' + String(applicant.id);
      applicantRows.push(
        <View key={key}>
          <Text style={{ fontSize: 30 }}>
            {applicant.name} - {applicant.email}
          </Text>
        </View>
      );
    });
    return (
      <View>
        <Text style={{ fontSize: 30 }}>
          {this.props.position.title} Applicants
        </Text>
        <ScrollView>
          {applicantRows}
        </ScrollView>
      </View>
    );
  }
}

const stateToProps = state => {
  return { position: state.positions.selectedPosition, applicants: state.positions.applicants };
};

export default connect(stateToProps, null)(Display);
