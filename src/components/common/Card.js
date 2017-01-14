import React, { Component } from 'react';
import {View, StyleSheet, Text } from 'react-native';
import { Header, MoodIcon, Body, SocialBar } from './';

class Card extends Component{
  constructor(props){
    super(props);
    this.state = {
      supportCount: 0,
      commentCount: 0,
      isLiked: false,
    };
  }

  likeIt = () => {
    // Once liked, it is not possible deslike!
    // It is a way to help supporting people.
    this.setState({ isLiked: true });
  }

  addSupport = () => {
    //console.log('fui clicado')
    this.setState({
      supportCount: ++this.state.supportCount,
      isLiked: true,
    });
  }

  addComment = () => {
    this.setState({ commentCount: ++this.state.commentCount });
  }

  render() {
    const type = this.props.type;
    return(
      <View style={styles.container}>
        <Header userName='Carey' timeStamp='45 m'>
          <MoodIcon type={type} />
        </Header>

        <Body
        numberOfLines={2}
        text='Today was really cool because I had a party at home.
        And the beauty is that I did not drink any kind of'
        />

        <SocialBar
         addSupport={this.addSupport}
         supportCount={this.state.supportCount}
         addComment={this.addComment}
         commentCount={this.state.commentCount}
         likeIt={this.state.likeIt}
         isLiked={this.state.isLiked}
         type={type}/>
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
    elevation: 5, /* Just Android*/
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export { Card };
