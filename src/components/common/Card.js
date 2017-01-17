import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';
import { Header, MoodIcon, Body, SocialBar } from './';

class Card extends Component{
  constructor(props){
    super(props);
    this.state = {
      supportCount: this.props.data.numberOfSupport, //-----Attention: Initiate with zero
      commentCount: this.props.data.numberOfComments,
      isLiked: false,
    };
  }

  likeIt = () => {
    // Once liked, it is not possible deslike!
    // It is a way to help supporting people.
    this.setState({ isLiked: true });
  }

  addSupport = () => {
    // -------------- Attention: each user should support each card
    // -------------- only one time. To be fixed with authetication rules
    this.setState({
      supportCount: ++this.state.supportCount,
      isLiked: true,
    });
  }

  addComment = () => {
    this.setState({ commentCount: ++this.state.commentCount });
  }

  render() {
    const {type, ownerUserName, timeStamp, body } = this.props.data;
    return(
      <View style={styles.container}>
        <Header userName={ownerUserName} timeStamp={timeStamp}>
          <MoodIcon type={type} />
        </Header>

        <Body
          numberOfLines={2}
          text={body}
        />

        <SocialBar
           addSupport={this.addSupport}
           supportCount={this.state.supportCount}
           addComment={this.addComment}
           commentCount={this.state.commentCount}
           likeIt={this.state.likeIt}
           isLiked={this.state.isLiked}
           type={type}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 16,
    borderRadius: 2,
    elevation: 5, // Android only
    shadowColor: '#000', // iOS only
    shadowOffset: { width: 5, height: 5}, // iOS only
    shadowOpacity: 0.3, // iOS only
    shadowRadius: 3, // iOS only
    alignSelf: 'stretch', // The card fills entire horizontal space
                          // even on iPad, and a short given description
                          // by the user
  },
});

export { Card };
