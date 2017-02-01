import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import  { onChangeComment, onSubmitComment } from './../actions';
import { InputForm } from './common';

class CommentCreate extends Component {
  constructor(props) {
    super(props);
  }

  onChangeComment = (text) => {
    this.props.onChangeComment(text);
  }

  onSubmitComment = () => {
    this.props.onSubmitComment({
      cardId: this.props.cardId,
      message: this.props.message
    });
  }

  render() {
    return (
      <View>

        <StatusBar hidden />
        <InputForm
           placeholder="Add a comment right here!"
           maxLength={this.props.maxTextSize}
           reminderText={this.props.textSize}
           submitButtonText="DONE"
           onChangeText={this.onChangeComment}
           onPress={this.onSubmitComment}
        />

      </View>
    );
  }
}

const mapStateToProps = ({ comment }) => {

  console.log('comment', comment)
  const { cardId, message, textSize, maxTextSize } = comment;
  return { cardId, message, textSize, maxTextSize };
};
export default connect(
  mapStateToProps,
  {onChangeComment, onSubmitComment}
)(CommentCreate);
