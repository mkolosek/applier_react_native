'use strict';

import React, { Component } from 'react';
import { ScrollView, View, Text, AsyncStorage, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPositionApplicants } from '../../actions/positions/actions';
import { rejectApplicant } from '../../actions/positionRequests/actions';

import styles from '../../assets/styles/shared_styles';

export class Display extends Component {
  componentWillMount() {
    this.props.getPositionApplicants(this.props.selectedPosition.id);
  }

  rejectApplicant(applicantId) {
    this.props.rejectApplicant(applicantId);
  }

  render() {
    var applicantRows = [];
    this.props.applicants.forEach(applicant => {
      let key = 'appl-' + String(applicant.id);
      applicantRows.push(
        <View key={key} style={styles.positions.applicantRow}>
          <Text style={styles.fonts.medium}>
            {applicant.email}
          </Text>
          {this.props.busy
            ? <View>
                <Text style={[styles.positions.applicantRejectBtn, styles.positions.rejectDisabled]}>Reject</Text>
              </View>
            : <TouchableOpacity
                onPress={() => {
                  this.rejectApplicant(applicant.token);
                }}
              >
                <Text style={[styles.positions.applicantRejectBtn, styles.positions.rejectEnabled]}>Reject</Text>
              </TouchableOpacity>}
        </View>
      );
    });
    return (
      <ScrollView style={styles.margins.topSmall}>
        {applicantRows}
      </ScrollView>
    );
  }
}

const stateToProps = state => {
  return { applicants: state.positions.applicants, busy: state.positions.busy };
};

const dispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getPositionApplicants,
      rejectApplicant
    },
    dispatch
  );
};

export default connect(stateToProps, dispatchToProps)(Display);
