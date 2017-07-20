import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPositionApplicants } from '../../actions/positions/actions';
import { rejectApplicant } from '../../actions/positionRequests/actions';

import styles from '../../assets/styles/shared_styles';

export class Display extends Component {
  static propTypes = {
    getPositionApplicants: PropTypes.func.isRequired,
    rejectApplicant: PropTypes.func.isRequired,
    selectedPosition: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
    applicants: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        token: PropTypes.string.isRequired,
      }),
    ).isRequired,
    busy: PropTypes.bool.isRequired,
  };

  componentWillMount() {
    this.props.getPositionApplicants(this.props.selectedPosition.id);
  }

  rejectApplicant(applicantId) {
    this.props.rejectApplicant(applicantId);
  }

  render() {
    const applicantRows = [];
    this.props.applicants.forEach((applicant) => {
      const key = `appl-${String(applicant.id)}`;
      applicantRows.push(
        <View key={key} style={styles.positions.applicantRow}>
          <Text style={styles.fonts.medium}>
            {applicant.email}
          </Text>
          {this.props.busy
            ? <View>
              <Text
                style={[styles.positions.applicantRejectBtn, styles.positions.rejectDisabled]}
              >
                  Reject
                </Text>
            </View>
            : <TouchableOpacity
              onPress={() => {
                this.rejectApplicant(applicant.token);
              }}
            >
              <Text style={[styles.positions.applicantRejectBtn, styles.positions.rejectEnabled]}>
                  Reject
                </Text>
            </TouchableOpacity>}
        </View>,
      );
    });
    return (
      <ScrollView style={styles.margins.topSmall}>
        {applicantRows}
      </ScrollView>
    );
  }
}

const stateToProps = state => ({
  applicants: state.positions.applicants,
  busy: state.positions.busy,
});

const dispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPositionApplicants,
      rejectApplicant,
    },
    dispatch,
  );

export default connect(stateToProps, dispatchToProps)(Display);
