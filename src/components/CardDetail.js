import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

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

    console.log('props CardDetail: ', this.props)
    console.log('--------------------------------------')
    console.log('banana call: ', this.props.banana)
    console.log('addSupport call: ', ()=>this.props.addSupport())
    console.log('supportCount call: ', this.props.supportCount)
    const data = getCardById("card_07_fjflg");
    const { type, ownerUserName, timeStamp, body } = data;

    const { containerStyle, headerStyle, bodyStyle, socialBarStyle, moodImageStyle } = styles;

    moodImage = require('./../assets/sun-detail.png');

    return(
      <View>
        {/*<Image source={moodImage} style={moodImageStyle}/>*/}
        <ScrollView>
          <StatusBar hidden />
          <View style={containerStyle}>

            <Header userName={ownerUserName} style={headerStyle} small />
            <Body text={body} style={bodyStyle} />

            <SocialBar
               addSupport={() => {}}
               supportCount={1}
               addComment={() => Actions.commentCreate()}
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
      </View>


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
  moodImageStyle: {
    maxHeight: 500,
    resizeMode: 'cover',
    alignSelf: 'center',
  },

});

export default CardDetail;
