import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  messageRow: {
    flexWrap: 'wrap',
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  messageList: {
    height: height - 150,
  },
  messageInput: {
    height: 50,
    width: width - 100,
  },
  messageSendBtn: {
    borderWidth: 1,
    margin: 5,
    paddingRight: 30,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingTop: 15,
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
});
