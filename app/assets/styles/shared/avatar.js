import { StyleSheet, Dimensions } from 'react-native';

const { height }  = Dimensions.get('window');

export default StyleSheet.create({
  small: {
    height: 22,
    width: 22,
    borderRadius: 3
  },
  medium: {
    height: 35,
    width: 35,
    borderRadius: 5
  },
  xLarge: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  account: {
    height: 130,
    width: 130,
    borderRadius: 65
  }
});
