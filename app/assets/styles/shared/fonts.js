import { StyleSheet } from 'react-native';

const colors = require('../../constants/colors');

export default StyleSheet.create({
  default: {
    color: colors.gray,
    fontSize: 16,
  },
  small: {
    fontSize: 12,
  },
  large: {
    fontSize: 30,
  },
  medium: {
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
});
