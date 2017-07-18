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
import { selectPosition, getPositionApplicants } from '../../actions/Positions';

const top = 0;

export class List extends Component {
  selectPosition(positionId) {
    let selectedPosition = this.props.positions.find(x => x.id === positionId);
    this.props.selectPosition(selectedPosition);
    this.props.getPositionApplicants(positionId);
    Actions.position();
  }

  render() {
    var positionRows = [];
    this.props.positions.forEach(position => {
      let key = 'pos-' + String(position.id);
      positionRows.push(
        <View key={key}>
          <TouchableOpacity
            onPress={() => {
              this.selectPosition(position.id);
            }}
          >
            <Text style={{ fontSize: 30 }}>
              {position.title}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
    return (
      <View>
        <Text style={{ fontSize: 30 }}>These are your positions:</Text>
        <ScrollView>
          {positionRows}
        </ScrollView>
      </View>
    );
  }
}

const stateToProps = state => {
  return { positions: state.positions.positions };
};

const dispatchToProps = dispatch => {
  return bindActionCreators(
    {
      selectPosition,
      getPositionApplicants
    },
    dispatch
  );
};

export default connect(stateToProps, dispatchToProps)(List);
