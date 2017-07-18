import React, { Component } from 'react';
import { Text, View } from 'react-native';
// styles
import styles from '../assets/styles/shared_styles';

export default class LogoText extends Component {
  render() {
    const { content, style } = this.props;
    return (
      <Text style={[style, styles.colors.whiteText, styles.fonts.bold, styles.fonts.large]}>
        {content}
      </Text>
    );
  }
}

module.exports = LogoText;
