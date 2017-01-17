import React, { Component } from 'react';
import { View , Text, StyleSheet, ScrollView, StatusBar } from 'react-native';

import { Header, MoodIcon, Body, SocialBar, Comment } from './common';

import { getCardById, getCommentsByCardId } from './../server/api'; // ----- to be changed

class CardDetail extends Component {
  constructor(props) {
    super(props);

  }

  renderComments = () => {
    const comments = getCommentsByCardId("card_07_fjflg");
    let cont = 0;
    return comments.map( comment => {
      const { userName, timeStamp, message } = comment;

      return (
        <Comment key={++cont}
          userName={userName}
          message={message}
          timeStamp={timeStamp}
        />
      );
    });
  }

  render() {

    const data = getCardById("card_07_fjflg");
    const { type, ownerUserName, timeStamp, body } = data;

    const { containerStyle, headerStyle, bodyStyle, socialBarStyle } = styles;

    return(
      <ScrollView>
        <StatusBar hidden />
        <View style={containerStyle}>

          <Header userName={ownerUserName} style={headerStyle} small />
          <Body text={body} style={bodyStyle} />

          <SocialBar
             addSupport={() => {}}
             supportCount={1}
             addComment={() => {}}
             commentCount={3}
             likeIt={() => {}}
             isLiked={false}
             type={type}
             vertical
             style={socialBarStyle}
          />

          {this.renderComments()}

        </View>
      </ScrollView>

    );
  }

}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    flex: 1,
    //borderWidth: 4,
    //borderColor: 'red',
  },
  headerStyle: {
    marginHorizontal: 20,
  },
  bodyStyle: {
    marginHorizontal: 20,
  },
  socialBarStyle: {
    borderTopWidth: 0,
    justifyContent: 'space-around',
    marginVertical: 30,
  },

});

export default CardDetail;
