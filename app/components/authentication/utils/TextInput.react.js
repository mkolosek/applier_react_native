import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, TextInput, LayoutAnimation } from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import detailInput from './styles/TextInput.css';

class DetailInput extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    required: PropTypes.bool,
    multiline: PropTypes.bool,
    error: PropTypes.string,
    edit: PropTypes.func,
  };

  constructor() {
    super();
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    this.state = { focused: false };
  }

  componentWillUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  async focus() {
    await this.setState({ focused: true });
    this.inputField.focus();
  }

  blur() {
    this.setState({ focused: false });
  }

  render() {
    if (this.state.focused || this.props.value) {
      return (
        <View style={detailInput.container}>
          <Text style={detailInput.smallText}>
            {this.props.name}
            {this.props.required ? <Text style={detailInput.required}> *</Text> : null}
          </Text>
          <View style={[detailInput.textInputContainer]}>
            {this.props.multiline
              ? <AutoGrowingTextInput
                ref={(c) => {
                  this.inputField = c;
                }}
                onBlur={this.blur}
                style={[
                  detailInput.textInput,
                  this.props.error ? null : detailInput.fullInputWidth,
                    { marginBottom: 0 },
                ]}
                maxHeight={80}
                underlineColorAndroid="transparent"
                onChangeText={(value) => {
                  this.props.edit(value);
                }}
                {...this.props}
              />
              : <TextInput
                onBlur={this.blur}
                ref={(c) => {
                  this.inputField = c;
                }}
                style={[detailInput.textInput]}
                underlineColorAndroid="transparent"
                onChangeText={(value) => {
                  this.props.edit(value);
                }}
                {...this.props}
              />}

            {this.props.error
              ? <Text style={detailInput.error}>
                {this.props.error}
              </Text>
              : null}
          </View>
        </View>
      );
    }
    return (
      <View>
        <TouchableOpacity onPress={this.focus} style={detailInput.touchableContainer}>
          <Text style={detailInput.text}>
            {this.props.name}
            {this.props.required ? <Text style={detailInput.required}> *</Text> : null}
          </Text>

          {this.props.error
            ? <Text style={detailInput.error}>
              {this.props.error}
            </Text>
            : null}
        </TouchableOpacity>
      </View>
    );
  }
}

DetailInput.defaultProps = {
  value: '',
  required: false,
  multiline: false,
  error: null,
  edit: null,
};

export default DetailInput;
