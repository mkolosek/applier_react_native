'use strict';

import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Alert,
  AsyncStorage,
  Keyboard,
  Platform,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signIn } from '../../actions/authentication/signin/actions';

//widgets
import { LogoText, Link } from '../../widgets';
import TextInput from './utils/TextInput.react';

// styles
import signin from './styles/SignIn.css';

const top = 0;

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', marginTop: false, top: top, disabled: false };
  }

  componentWillMount() {
    const listenerShow = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const listenerHide = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';
    this.keyboardDidShowListener = Keyboard.addListener(listenerShow, this.keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener(listenerHide, this.keyboardDidHide.bind(this));
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow(e) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ top: -(e.endCoordinates.height - 50), marginTop: true });
  }

  keyboardDidHide(e) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ top: top, marginTop: false });
  }

  login() {
    this.setState({ disabled: true });
    var authStrings = {};
    const { email, password } = this.state;
    this.props.signIn(email, password).then(() => {
      if (this.props.error) {
        var error = this.props.error.first() || {};
        switch (error.title) {
          case 'USER_NOT_FOUND':
            Alert.alert(authStrings['invalidCredentials'], authStrings['invalidCredentialsError']);
            break;
          default:
            Alert.alert(authStrings['error'], authStrings['errorSignIn']);
            break;
        }
        this.setState({ disabled: false });
      } else {
        var ref = this;
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
              { marginTop: this.state.top, justifyContent: this.state.marginTop ? 'center' : 'space-between' }
            ]}
          >
            <View style={signin.form}>
              <LogoText content="Applier" style={signin.logo} />
              <TextInput
                name="email"
                onChangeText={email => {
                  this.setState({ email });
                }}
                value={this.state.email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TextInput
                name="password"
                secureTextEntry={true}
                onChangeText={password => {
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
                : <TouchableOpacity style={signin.signinBtn} onPress={this.login.bind(this)}>
                    <Text style={signin.signinBtnText}>Log in</Text>
                  </TouchableOpacity>}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const stateToProps = state => {
  return {
    error: state.signin.error
  };
};

const dispatchToProps = dispatch => {
  return bindActionCreators(
    {
      signIn
    },
    dispatch
  );
};

export default connect(null, dispatchToProps)(SignIn);
