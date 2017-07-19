'use strict';

import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPositions } from '../../actions/positions/actions';

import styles from '../../assets/styles/shared_styles';

export class List extends Component {
  componentWillMount() {
    this.props.getPositions();
  }

  selectPosition(positionId) {
    let selectedPosition = this.props.positions.find(x => x.id === positionId);
    Actions.position({ selectedPosition });
  }

  render() {
    var positionRows = [];
    this.props.positions.forEach(position => {
      let key = 'pos-' + String(position.id);
      positionRows.push(
        <View key={key} style={styles.positions.positionRow}>
          <TouchableOpacity
            onPress={() => {
              this.selectPosition(position.id);
            }}
          >
            <Text style={styles.fonts.large}>
              {position.title}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
    return (
      <View style={styles.margins.topSmall}>
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
      getPositions
    },
    dispatch
  );
};

export default connect(stateToProps, dispatchToProps)(List);
