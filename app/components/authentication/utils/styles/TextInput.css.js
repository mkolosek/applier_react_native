import { Dimensions } from 'react-native';
import * as colors from '../../../../assets/constants/colors';

const { width } = Dimensions.get('window');

const detailInput = {
  container: {
    marginTop: 5,
    marginBottom: 5,
  },
  touchableContainer: {
    marginTop: 5,
    borderBottomWidth:1,
    borderBottomColor: colors.white,
    width: width - 40 - 10,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    alignSelf: 'center',
    fontSize: 14,
    color: colors.white
  },
  required: {
    color: colors.white
  },
  smallText: {
    color: colors.white,
    fontSize: 12
  },
  textInput: {
    height: 38,
    width: width - 40 - 60, //width - margins - input margin
    color: colors.white,
    fontSize: 15,
    marginBottom: -5,
  },
  textInputContainer: {
    minHeight: 38,
    width: width - 40 - 10, //width - margins - input margin
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fullInputWidth: {
    width: width - 40 - 10,
  },
  error: {
    alignSelf: 'center',
    marginTop: 2,
    fontSize: 12,
    color: colors.red,
  }
}

export default detailInput;
