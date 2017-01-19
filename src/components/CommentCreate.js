import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import { InputForm } from './common';

class CommentCreate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
      
        <StatusBar hidden />
        <InputForm
         placeholder="Add a comment right here!"
         maxLenght={700}
         reminderText={0} // ------- Attention: needs update
         submitButtonText="DONE"
        />

      </View>
    );
  }
}

export default CommentCreate;
