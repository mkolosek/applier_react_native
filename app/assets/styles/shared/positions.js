import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  positionRow: {
    padding: 10,
    marginLeft: 20,
  },
  applicantRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  applicantRejectBtn: {
    fontSize: 18,
    borderWidth: 1,
    padding: 5,
    marginRight: 10,
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
