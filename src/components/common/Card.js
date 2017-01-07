import React, { Component } from 'react';
import {View, StyleSheet, Text } from 'react-native';
import { Header, MoodIcon, SocialBar } from './';

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
    console.log('fui clicado')
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
        <Header title='Adeildo' timeStamp='17 m'>
          <MoodIcon type={type} />
        </Header>

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
