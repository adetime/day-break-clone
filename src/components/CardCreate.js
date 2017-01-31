import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Switch } from 'react-native';
import { connect } from 'react-redux';
import { onChangeCardBodyMessage } from './../actions';

import { InputForm } from './common';

class CardCreate extends Component {
  constructor(props) {
    super(props);
  }

  onChangeBodyMessage = (text) => {
    this.props.onChangeCardBodyMessage(text);

  };

  render() {
    console.log('card type on render = ', this.props.type )
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

        />

        <Switch />

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

const mapStateToProps = ({ mutateCard }) => {
  const { type, textSize, maxTextSize } = mutateCard;
  console.log('mutateCard = ', mutateCard )
  console.log('card type mapped = ', type )

  return { type, textSize, maxTextSize  };
};

export default connect(
  mapStateToProps,
  {onChangeCardBodyMessage}
)(CardCreate);
