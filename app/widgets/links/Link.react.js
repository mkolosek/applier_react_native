'use strict';

import React, { Component } from 'react';
import { Text } from 'react-native';
//styles
import styles from '../../assets/styles/shared_styles';

export default class Link extends Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false };
    this.onPress = this.onPress.bind(this);
  }

  async onPress() {
    this.setState({ disabled: true });
    await this.props.onPress();
    this.setState({ disabled: false });
  }

  render() {
    const { style, content, onPress, color, disabledStatus, specialDisabled } = this.props;
    var { disabled } = this.state;
    var disabledText = 'loading';
    if (this.props.disabled) {
      disabled = true;
      disabledText = content;
    }
    return (
      <Text
        style={[
          styles.margins.topMedium,
          styles.fonts.bold,
          disabled ? styles.colors.grayText : color || styles.colors.blueText,
          style
        ]}
        onPress={disabled || specialDisabled ? null : this.onPress}
      >
        {disabled ? disabledText : content}
      </Text>
    );
  }
}

module.exports = Link;
