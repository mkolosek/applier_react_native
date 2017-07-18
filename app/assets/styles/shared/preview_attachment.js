import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  /* attachment preview */
  video: {
    marginLeft:20,
    marginRight: 20,
    height: 150
  },
  cover: {
    marginTop: 5,
    marginLeft:20,
    marginRight: 20,
    height: 150,
    resizeMode: 'cover'
  },
  url: {
    height: 150,
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft:20,
    marginRight: 20
  },
  defaultLink: {
    marginLeft:20,
    marginRight: 20,
    marginTop: 20
  },
  // labels
  label: {
    position:'absolute',
    bottom: 3,
    right: 20
  },
  attachment: {
    position:'absolute',
    bottom: 3,
    left: 60
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  // preview icons
  icon: {
    position:'absolute',
    bottom: 0,
    left: 20
  },
  // holder
  holder: {
    marginTop: 40,
    marginBottom: 20,
    flex: 1,
  }
});
