import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPositionApplicants } from '../../actions/positions/actions';

import styles from '../../assets/styles/shared_styles';

export class Display extends Component {
  static propTypes = {
    getPositionApplicants: PropTypes.func.isRequired,
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
  };

  componentWillMount() {
    this.props.getPositionApplicants(this.props.selectedPosition.id);
  }

  selectApplicant(applicantId) {
    const selectedApplicant = this.props.applicants.find(x => x.id === applicantId);
    Actions.applicant({ selectedApplicant });
  }

  render() {
    const applicantRows = [];
    this.props.applicants.forEach((applicant) => {
      const key = `appl-${String(applicant.id)}`;
      applicantRows.push(
        <View key={key} style={styles.positions.applicantRow}>
          <TouchableOpacity onPress={() => Actions.applicant({ selectedApplicant: applicant })}>
            <Text style={styles.fonts.medium}>
              {applicant.name} - {applicant.email}
            </Text>
          </TouchableOpacity>
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
});

const dispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPositionApplicants,
    },
    dispatch,
  );

export default connect(stateToProps, dispatchToProps)(Display);
