import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPositions } from '../../actions/positions/actions';

import styles from '../../assets/styles/shared_styles';

export class List extends Component {
  static propTypes = {
    getPositions: PropTypes.func.isRequired,
    positions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  componentWillMount() {
    this.props.getPositions();
  }

  selectPosition(positionId) {
    const selectedPosition = this.props.positions.find(x => x.id === positionId);
    Actions.position({ selectedPosition });
  }

  render() {
    const positionRows = [];
    this.props.positions.forEach((position) => {
      const key = `pos-${String(position.id)}`;
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
        </View>,
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

const stateToProps = state => ({ positions: state.positions.positions });

const dispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPositions,
    },
    dispatch,
  );

export default connect(stateToProps, dispatchToProps)(List);
