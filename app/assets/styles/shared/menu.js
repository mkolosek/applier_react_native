import { StyleSheet } from 'react-native';

const colors = require('../../constants/colors');

export default StyleSheet.create({
  menuElement: {
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.lightGray,
  },
  menuLastElement: {
    marginLeft: 15,
    marginRight: 15,
  },
  menuElementView: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
  },
  menuElementViewInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  menuElementText: {
    fontSize: 14,
  },
  menuElementTextBold: {
    fontSize: 14,
    fontWeight: 'bold',
    width: 80,
  },
  menuElementTextDark: {
    color: colors.gray,
  },
  menuTextInput: {
    flex: 2,
    fontSize: 14,
    padding: 0,
  },
  signOutElement: {
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
    fontSize: 14,
    color: colors.red,
  },
  seperator: {
    backgroundColor: colors.lightGray,
    marginTop: -1,
    height: 1,
  },
  avatar: {
    marginTop: 30,
    marginBottom: -60,
    overflow: 'hidden',
  },
  avatarBorder: {
    borderColor: colors.lightGray,
    borderWidth: 1,
  },
  uploadImageBtnHolder: {
    top: -35,
  },
  uploadImageBtn: {
    height: 40,
    width: 120,
    backgroundColor: colors.white,
    opacity: 0.7,
  },
  uploadImageIcon: {
    top: -50,
    height: 50,
    width: 50,
  },
});
