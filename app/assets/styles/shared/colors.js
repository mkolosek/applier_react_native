import { StyleSheet } from 'react-native';
const colors = require('../../constants/colors');

export default StyleSheet.create({
  // text

  whiteText: {
    color: colors.white
  },
  blueText: {
    color: colors.blue
  },
  greenText: {
    color: colors.green
  },
  lightGrayText: {
    color: colors.lightGray
  },
  grayText: {
    color: colors.gray
  },
  darkerGrayText: {
    color: colors.darkerGray
  },
  redText: {
    color: colors.red
  },
  blackText: {
    color: colors.black
  },
  placeholderText: {
    color: colors.lightGray
  },
  // background
  blueBackground: {
    backgroundColor: colors.blue
  },
  whiteBackground: {
    backgroundColor: colors.white
  },
  lightGrayBackground: {
    backgroundColor: colors.lightGray
  },
  blackWithOpacity: {
    backgroundColor: colors.black,
    opacity: 0.9
  }
});
