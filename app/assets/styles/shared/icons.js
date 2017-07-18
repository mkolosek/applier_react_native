import { StyleSheet } from 'react-native';

import * as constants from '../../constants/icons'
import * as colors from '../../constants/colors'

export default StyleSheet.create({
  tiny: {
    width: 12,
    height: 12
  },
  xsmall: {
    width: 16,
    height: 16
  },
  small: {
    width: 24,
    height: 24
  },
  medium: {
    width: 32,
    height: 32
  },
  large: {
    width: 64,
    height: 64
  },
  // footer icons
  home: {
    marginTop: -8,
    width: 60,
    height: 62
  },
  person: {
    marginTop: 10,
    width: 25,
    height: 35
  },
  activitiesShow: {
    marginTop: 10,
    width: constants.activitiesShow.width,
    height: constants.activitiesShow.height
  },
  mailbox: {
    marginTop: 5,
    width: 35,
    height: 25
  },
  menu: {
    marginTop: 10,
    marginRight: 15,
    width: 32,
    height: 32
  },
  // nav icons - forward checkMark
  checkMark: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: -1,
    left: -1
  },
  picker: {
    marginTop: 5,
    width: 18,
    height: 18
  },
  activity: {
    width: constants.activity.width,
    height: constants.activity.height
  },
  //category icons
  rating: {
    width: 38,
    height: 38
  },
  newEngagement:{
    width: 38,
    height: 38,
    alignSelf:'center',
    borderWidth:1,
    borderColor:'gray',
    borderRadius:19,
  },
  newRole:{
    width: 38,
    height: 38,
    alignSelf:'center',
    borderWidth:1,
    borderColor:'gray',
    borderRadius:19,
  },
  activeScreen: {
    width: 38,
    height: 38,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // select category icons
  categoryHolder: {
    width: 60,
    height: 60
  },
  generalrating: {
    position: 'relative',
    bottom: 5,
    left: 7,
    width: 48,
    height: 48
  },
  engagement: {
    position: 'relative',
    left: 10,
    width: 38,
    height: 38
  },
  rating: {
    position: 'relative',
    left: 10,
    width: 38,
    height: 38
  },
  achievement: {
    position: 'relative',
    left: 10,
    width: 38,
    height: 38
  },
  feedback: {
    position: 'relative',
    left: 10,
    width: 38,
    height: 38
  },
  camera: {
    position: 'relative',
    left: 10,
    width: 38,
    height: 38
  },
  link: {
    position: 'relative',
    left: 10,
    width: 38,
    height: 38
  },
  video: {
    position: 'relative',
    left: 10,
    width: 38,
    height: 38
  },
  cameraPreview: {
    position: 'relative',
    left: 20,
    bottom: 6,
    width: 25,
    height: 25
  },
  // subcategories
  subcategory: {
    width: 20,
    height: 20,
    margin: 4
  },
  // attachments (rating preview actions)
  attachmentAction: {
    width: 42,
    height: 42,
    marginTop: -80,
    alignSelf: 'center'
  },
  experienceType: {
    width: 50,
    height: 50
  },
  activities_show: {
    position: 'relative',
    top: 5,
    left: 10,
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#B5B5B5',
    borderWidth: 1,
    borderRadius: 25
  },
  title: {
    width: 26,
    height: 26
  },
  // card actions
  like: {
    width: 25,
    height: 24
  },
  comment: {
    width: 24,
    height: 24
  },
  xsmallLike: {
    width: 17,
    height: 16
  }
});
