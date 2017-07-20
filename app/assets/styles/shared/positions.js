import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  positionRow: {
    padding: 10,
    marginLeft: 20,
  },
  applicantRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 40,
    paddingRight: 20,
  },
  applicantRejectBtn: {
    fontSize: 18,
    borderWidth: 1,
    padding: 5,
    marginLeft: 10,
  },
  rejectEnabled: {
    color: 'white',
    backgroundColor: 'red',
    borderColor: 'red',
  },
  rejectDisabled: {
    color: 'black',
    backgroundColor: 'grey',
    borderColor: 'grey',
  },
});
