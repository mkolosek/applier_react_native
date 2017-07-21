import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { Actions } from 'react-native-router-flux';
import { rejectApplicant, ignoreApplicant } from '../../actions/positionRequests/actions';

const ApplicantMenu = props =>
  (<Menu>
    <MenuTrigger text="Options" customStyles={{ triggerOuterWrapper: { marginRight: 10 } }} />
    <MenuOptions customStyles={{ optionsContainer: { width: 120 } }}>
      <MenuOption onSelect={() => Actions.answers({ selectedApplicant: props.selectedApplicant })}>
        <Text style={{ fontSize: 18 }}>View Answers</Text>
      </MenuOption>
      <MenuOption
        onSelect={() => {
          props.ignoreApplicant(props.selectedApplicant.token);
          Actions.pop();
        }}
      >
        <Text style={{ fontSize: 18 }}>Ignore</Text>
      </MenuOption>
      <MenuOption
        onSelect={() => {
          props.rejectApplicant(props.selectedApplicant.token);
          Actions.pop();
        }}
      >
        <Text style={{ fontSize: 18, color: 'red' }}>Reject</Text>
      </MenuOption>
    </MenuOptions>
  </Menu>);

ApplicantMenu.propTypes = {
  ignoreApplicant: PropTypes.func.isRequired,
  rejectApplicant: PropTypes.func.isRequired,
  selectedApplicant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
  }).isRequired,
};

const dispatchToProps = dispatch =>
  bindActionCreators(
    {
      ignoreApplicant,
      rejectApplicant,
    },
    dispatch,
  );

export default connect(null, dispatchToProps)(ApplicantMenu);
