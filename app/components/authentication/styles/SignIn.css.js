import { StyleSheet, Dimensions, Platform } from 'react-native';
import * as colors from '../../../assets/constants/colors';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  background: {
    backgroundColor: colors.lightGray,
    flex: 1,
  },
  logo: {
    margin: 80,
  },
  form: {
    alignItems: 'center',
  },
  container: {
    backgroundColor: colors.lightGray,
    paddingBottom: Platform.OS === 'ios' ? 20 : 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    height,
  },
  innerContainer: {
    width,
    paddingBottom: Platform.OS === 'ios' ? 20 : 40,
    alignItems: 'center',
    height,
    justifyContent: 'space-between',
  },
  whiteText: {
    marginTop: 60,
    color: colors.white,
  },
  linkRight: {
    marginTop: 10,
    fontWeight: 'normal',
    width: width - 50,
    color: colors.white,
    textAlign: 'right',
    fontSize: 13,
  },
  signinBtn: {
    backgroundColor: colors.green,
    height: 40,
    width: width - 180,
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 120,
    borderRadius: 3,
  },
  disabledBtnText: {
    color: colors.lightGrey,
  },
  signinBtnText: {
    alignSelf: 'center',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 22,
  },
  footer: {
    textAlign: 'center',
    color: colors.white,
  },
});
