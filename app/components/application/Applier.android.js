import React, { Component } from 'react';
import { View, AsyncStorage, BackAndroid } from 'react-native';
import { Actions, Router } from 'react-native-router-flux';
import { EventEmitter } from 'events';
import { MenuContext } from 'react-native-popup-menu';
// actions
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import scenes from './Scenes';
import { getPositions } from '../../actions/positions/actions';

BackAndroid.addEventListener('hardwareBackPress', () => {
  try {
    Actions.pop();
    return true;
  } catch (err) {
    return false;
  }
});

const RouterWithRedux = connect()(Router);

export class RootRouter extends Component {
  constructor(props) {
    super(props);
    EventEmitter.prototype.setMaxListeners(0);
    AsyncStorage.getItem('auth_token')
      .then((token) => {
        if (token) {
          Actions.home();
        } else {
          Actions.signin();
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <MenuContext>
        <View style={{ flex: 1 }}>
          <RouterWithRedux hideNavBar>
            {scenes}
          </RouterWithRedux>
        </View>
      </MenuContext>
    );
  }
}

const dispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPositions,
    },
    dispatch,
  );

export default connect(null, dispatchToProps)(RootRouter);
