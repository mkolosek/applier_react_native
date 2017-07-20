import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  hcentered: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  hstreched: {
    alignSelf: 'stretch',
  },
  hstrechcentred: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  vcentered: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  left: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  right: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  spaceBetween: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  centredRowAligment: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  dialog: {
    backgroundColor: 'white',
    width: 280,
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 150,
  },
});
