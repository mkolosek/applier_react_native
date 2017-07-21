import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  messageRow: {
    flexWrap: 'wrap',
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  messageInput: {
    height: 50,
    width: width - 100,
  },
  messageSendBtn: {
    borderWidth: 1,
    margin: 5,
    paddingRight: width * 0.08333333333333333,
    paddingBottom: height * 0.016891891891891893,
    paddingLeft: width * 0.08333333333333333,
    paddingTop: height * 0.016891891891891893,
  },
  messageSendBtnEnabled: {
    color: 'white',
    backgroundColor: 'green',
    borderColor: 'green',
  },
  messageSendBtnDisabled: {
    color: 'black',
    backgroundColor: 'grey',
    borderColor: 'black',
  },
  responseRow: {
    padding: 5,
    marginTop: 10,
  },
});
