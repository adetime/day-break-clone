import React, { Component } from 'react';
import { View , Text, StyleSheet } from 'react-native';

import { Header, MoodIcon, Body, SocialBar } from './common';

import {getCardById, getCommentsByCardId} from './../server/api'; // ----- to be changed

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
        <View key={++cont} >
          <Header userName={userName} timeStamp={timeStamp}/>
          <Body text={message} />
        </View>
      );

    });
  }

  render() {

    const data = getCardById("card_07_fjflg");
    const {type, ownerUserName, timeStamp, body } = data;





    //sconsole.log('comments', comments)


    return(
      <View style={styles.containerStyle}>


        <Text>ScroolView Placeholder</Text>

        <Header userName={ownerUserName}/>

        <Body text={body} />

        <SocialBar
           addSupport={() => {}}
           supportCount={1}
           addComment={() => {}}
           commentCount={3}
           likeIt={() => {}}
           isLiked={false}
           type={type}
        />

        {this.renderComments()}




      </View>
    );
  }

}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    flex: 1,
    borderWidth: 4,
    borderColor: 'red',
  },

});

export default CardDetail;
