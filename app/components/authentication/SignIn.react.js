import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Text,
  Alert,
  Keyboard,
  Platform,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import signIn from '../../actions/authentication/signin/actions';

// widgets
import TextInput from './utils/TextInput.react';

// styles
import signin from './styles/SignIn.css';
import styles from '../../assets/styles/shared_styles';

const top = 0;

export class SignIn extends Component {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
    error: PropTypes.shape({
      error_message: PropTypes.string,
      error: PropTypes.number,
    }),
  };

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', marginTop: false, top, disabled: false };
    this.login = this.login.bind(this);
  }

  componentWillMount() {
    const listenerShow = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const listenerHide = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';
    this.keyboardDidShowListener = Keyboard.addListener(
      listenerShow,
      this.keyboardDidShow.bind(this),
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      listenerHide,
      this.keyboardDidHide.bind(this),
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow(e) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ top: -(e.endCoordinates.height - 50), marginTop: true });
  }

  /* eslint-disable no-unused-vars*/
  keyboardDidHide(e) {
    /* eslint-enable no-unused-vars*/
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ top, marginTop: false });
  }

  login() {
    this.setState({ disabled: true });
    const { email, password } = this.state;
    this.props.signIn(email, password).then(() => {
      if (this.props.error) {
        Alert.alert('Invalid Credentials', this.props.error.error_message);
        this.setState({ disabled: false });
      } else {
        this.setState({ disabled: false });
        Actions.home();
      }
    });
  }

  render() {
    return (
      <View style={signin.background}>
        <ScrollView keyboardShouldPersistTaps="always" keyboardDismissMode="on-drag">
          <View
            style={[
              signin.container,
              {
                marginTop: this.state.top,
                justifyContent: this.state.marginTop ? 'center' : 'space-between',
              },
            ]}
          >
            <View style={signin.form}>
              <Text
                style={[
                  signin.logo,
                  styles.colors.blackText,
                  styles.fonts.bold,
                  styles.fonts.large,
                ]}
              >
                Applier
              </Text>
              <TextInput
                name="email"
                onChangeText={(email) => {
                  this.setState({ email });
                }}
                value={this.state.email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TextInput
                name="password"
                secureTextEntry
                onChangeText={(password) => {
                  this.setState({ password });
                }}
                value={this.state.password}
              />
            </View>
            <View style={{ marginTop: this.state.marginTop ? 60 : 0 }}>
              {this.state.disabled
                ? <View style={signin.signinBtn}>
                  <Text style={[signin.signinBtnText, signin.disabledBtnText]}>Logging in</Text>
                </View>
                : <TouchableOpacity style={signin.signinBtn} onPress={this.login}>
                  <Text style={signin.signinBtnText}>Log in</Text>
                </TouchableOpacity>}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

SignIn.defaultProps = {
  error: null,
};

const stateToProps = state => ({
  error: state.signin.error,
});

const dispatchToProps = dispatch =>
  bindActionCreators(
    {
      signIn,
    },
    dispatch,
  );

export default connect(stateToProps, dispatchToProps)(SignIn);
