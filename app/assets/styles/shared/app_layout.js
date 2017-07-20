import { StyleSheet, Dimensions } from 'react-native';

const colors = require('../../constants/colors');

const { width } = Dimensions.get('window');
const seventyFiveWidth = width * 0.75;

export default StyleSheet.create({
  android_layout: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ios_layout: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 20,
  },
  absoluteTopHolder: {
    flex: 1,
    position: 'absolute',
    top: 60,
    left: 20,
    right: -20,
  },
  actionLink: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footer: {
    alignItems: 'center',
    position: 'absolute',
    borderTopWidth: 0.5,
    borderTopColor: colors.lightGray,
    height: 50,
    bottom: 0,
    left: 0,
    right: 0,
  },
  listItem: {
    flex: 1,
    width,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  emptylistItem: {
    height: 50,
  },
  searchBox: {
    color: colors.darkGray,
    paddingLeft: 15,
    fontSize: 13,
    backgroundColor: colors.inputGrey,
    alignSelf: 'stretch',
    borderRadius: 5,
    height: 35,
    paddingVertical: 8,
  },
  line: {
    alignSelf: 'stretch',
    height: 1,
    backgroundColor: colors.lightGray,
    position: 'relative',
    top: 15,
  },
  addLinkBox: {
    paddingBottom: 0,
    color: colors.gray,
    fontSize: 12,
    backgroundColor: colors.white,
    borderWidth: 0,
    marginRight: 35,
    height: 35,
    alignSelf: 'stretch',
  },
  notificationBagde: {
    backgroundColor: 'red',
    width: 18,
    height: 18,
    position: 'absolute',
    left: seventyFiveWidth - 5,
    top: 2,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
