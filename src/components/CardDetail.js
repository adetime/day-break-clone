import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Header, MoodIcon, Body, SocialBar, Comment } from './common';

// ----- Attention: to be changed
import { getCommentsByCardId } from './../server/api';

class CardDetail extends Component {
  constructor(props) {
    super(props);

  }

  renderComments = () => {
    const comments = getCommentsByCardId(this.props.card.id);
    let cont = 0;

    // Maps each comment
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

    // Gets card data
    const {
      type,
      ownerUserName,
      timeStamp,
      body,
      numberOfSupport,
      numberOfComments
    } = this.props.card;

    // Access default styles
    const {
      containerStyle,
      headerStyle,
      bodyStyle,
      socialBarStyle,
      moodImageStyle
    } = styles;


    // Resulting Component
    return(
      <View>

        <ScrollView>
          
          <View style={containerStyle}>

            <Header userName={ownerUserName} containerStyle={headerStyle} small />
            <Body text={body} containerStyle={bodyStyle} />

            <SocialBar
               addSupport={() => {}}
               supportCount={numberOfSupport}
               addComment={() => Actions.commentCreate()}
               commentCount={numberOfComments}
               isLiked={false}
               type={type}
               vertical
               containerStyle={socialBarStyle}
            />

            {this.renderComments()}

          </View>
        </ScrollView>

      </View>
    );
  }
}

// Defines default styles
const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    flex: 1,
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
