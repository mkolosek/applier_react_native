import { StyleSheet } from 'react-native';
const colors =  require('../../constants/colors')

export default StyleSheet.create({
  bottomLightGray: {
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1
  },
  lightGray: {
    borderColor: colors.lightGray,
    borderWidth: 1
  },
  noBorders: {
    borderWidth: 0
  }
});
