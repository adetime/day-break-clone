import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Switch } from 'react-native';
import { connect } from 'react-redux';
import { onChangeCardBodyMessage, onChangeCommentsAutorization } from './../actions';

import { InputForm, SwitchBar } from './common';

class CardCreate extends Component {
  constructor(props) {
    super(props);
  }

  onChangeBodyMessage = (text) => {
    this.props.onChangeCardBodyMessage(text);
  };

  onValueChange = (value) => {
    this.props.onChangeCommentsAutorization(value);
  };


  render() {
    const controlCommentsBar = (
      <SwitchBar
        targetTag='Comments'
        value={this.props.enabledComments}
        onValueChange={this.onValueChange}
        onTintColor='rgba(58,179,221,1)' // iOS only
      />
    );


    return (
      <View style={styles.container}>

        <StatusBar hidden />
        <InputForm
           placeholder="Tell us more"
           placeholderTextColor='white'
           maxLength={this.props.maxTextSize}
           reminderText={this.props.textSize}
           onChangeText={this.onChangeBodyMessage}
           submitButtonText="DONE"
           returnKeyType='done'
           underlineColorAndroid='transparent'
           multiline
           inputStyle={styles.inputText}
           submitButtonStyle={styles.submitContainer}
           customBar={controlCommentsBar}
        />



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //borderWidth: 1,
    //borderColor: 'yellow',
  },
  inputText: {
    color: 'white',
    fontSize: 17,
    textAlignVertical: 'top',
  },
  submitContainer: {
    //backgroundColor: 'red',
  },
  submitText: {
    color: 'rgba(58,179,221,1)',
    fontSize: 18,
  },

});

const mapStateToProps = ({ card }) => {
  console.log('newCard', card)
  const { type, textSize, maxTextSize, enabledComments } = card;

  return { type, textSize, maxTextSize, enabledComments };
};

export default connect(
  mapStateToProps,
  {onChangeCardBodyMessage, onChangeCommentsAutorization}
)(CardCreate);
