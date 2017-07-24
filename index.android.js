/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Applier from './app/index';

export default class ApplierNative extends Component {
  render() {
    return <Applier />;
  }
}

AppRegistry.registerComponent('Applier', () => ApplierNative);
