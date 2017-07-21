import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Keyboard,
  LayoutAnimation,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Moment from 'moment';
import { getApplicantMessages, sendApplicantMessage } from '../../actions/positionRequests/actions';
import styles from '../../assets/styles/shared_styles';

const top = 0;
const { height } = Dimensions.get('window');

export class Display extends Component {
  static propTypes = {
    getApplicantMessages: PropTypes.func.isRequired,
    sendApplicantMessage: PropTypes.func.isRequired,
    selectedApplicant: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      token: PropTypes.string.isRequired,
    }).isRequired,
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        user_id: PropTypes.number,
        seen_at: PropTypes.string,
        created_at: PropTypes.string,
        display_name: PropTypes.string,
      }),
    ).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { message: '', marginTop: false, top, disabled: false };
    this.sendMessage = this.sendMessage.bind(this);
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
    this.props.getApplicantMessages(this.props.selectedApplicant.token);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow(e) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const heightModifier = height * 0.5067567567567568;
    this.setState({ top: -(e.endCoordinates.height - heightModifier), marginTop: true });
  }

  /* eslint-disable no-unused-vars*/
  keyboardDidHide(e) {
    /* eslint-enable no-unused-vars*/
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ top, marginTop: false });
  }

  sendMessage() {
    this.setState({ disabled: true });
    Keyboard.dismiss();
    const { message } = this.state;
    this.props.sendApplicantMessage(this.props.selectedApplicant.token, message).then(() => {
      this.setState({ disabled: false, message: '' });
    });
  }

  render() {
    Moment.locale('en');
    const messageRows = [];
    this.props.messages.forEach((message) => {
      const key = `msg-${message.id}`;
      const date = Moment(message.created_at).format('D/M/Y [at] HH:mm');
      const messageStyles = [styles.fonts.medium, styles.margins.topSmall];
      if (message.user_id === null) {
        messageStyles.push(styles.alignments.right);
      }
      messageRows.push(
        <View key={key} style={styles.positionRequests.messageRow}>
          <Text style={styles.fonts.small}>
            On {date} {message.display_name} said:
          </Text>
          <Text style={messageStyles}>
            {message.comment}
          </Text>
        </View>,
      );
    });
    const heightModifier = this.state.marginTop
      ? height * 0.6925675675675675
      : height * 0.2533783783783784;
    return (
      <View
        style={{
          marginTop: this.state.top,
          justifyContent: this.state.marginTop ? 'center' : 'space-between',
        }}
      >
        <View style={{ height: height - heightModifier }}>
          <ScrollView>
            {messageRows}
          </ScrollView>
        </View>
        <View
          style={{
            borderTopColor: 'darkgrey',
            borderTopWidth: 1,
            flexDirection: 'row',
            backgroundColor: 'white',
            marginBottom: this.state.marginTop ? 20 : 0,
            height: 75,
          }}
        >
          <TextInput
            multiline
            style={styles.positionRequests.messageInput}
            onChangeText={(message) => {
              this.setState({ message });
            }}
            value={this.state.message}
          />
          {this.state.disabled
            ? <View>
              <Text
                style={[
                  styles.positionRequests.messageSendBtn,
                  styles.positionRequests.messageSendBtnDisabled,
                ]}
              >
                  Send
                </Text>
            </View>
            : <TouchableOpacity onPress={this.sendMessage}>
              <Text
                style={[
                  styles.positionRequests.messageSendBtn,
                  styles.positionRequests.messageSendBtnEnabled,
                ]}
              >
                  Send
                </Text>
            </TouchableOpacity>}
        </View>
      </View>
    );
  }
}

const stateToProps = state => ({
  messages: state.positionRequests.messages.sort((a, b) => b.id - a.id),
});

const dispatchToProps = dispatch =>
  bindActionCreators(
    {
      getApplicantMessages,
      sendApplicantMessage,
    },
    dispatch,
  );

export default connect(stateToProps, dispatchToProps)(Display);
