import React, { Component } from 'react';
import {View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import { Header, MoodIcon, Body, SocialBar } from './common';

import { setInitialReactionState } from './../actions';


class Card extends Component{
  constructor(props){
    super(props);
    this.state = {
      //supportCount: this.props.data.numberOfSupport, //-----Attention: Initiate with zero
      //commentCount: this.props.data.numberOfComments,//-----Attention: Initiate with zero
      //currentUserLiked: false, //-----Attention: To be fetched from user authetication
    };
  }

  componentDidMount(){
    const { id, numberOfSupport, supportedUserId } = this.props.data;

    //console.log('supportedUserId', supportedUserId)
      this.props.setInitialReactionState({
        cardId: id,
        numberOfLikes: numberOfSupport,
        likedUsersId: supportedUserId,
      });
  }



  // Handles the support button
  addSupport = () => {
    // -------------- Attention: each user should support each card
    // -------------- only one time. To be fixed with authetication rules
    //this.setState({
      //supportCount: ++this.state.supportCount,
      //currentUserLiked: true,
  //  });

    console.log('fui clicado')

    this.props.onPressSupport(this.props.data.id);
    //------- Attention: Need to mutate user database model
  }


    // Handles navagation to CardDetail's screen
  showDetail = () => {
    // And pass 'card' as props the next scene component
    // using action creators
    this.props.showCardDetail({ card: this.props.data });
  }

  render() {
    // Receives data to render a Card
    const { type, ownerUserName, timeStamp, body } = this.props.data;

    //console.log('this.props.data', this.props.data)

    // Resulting component
    return(
      <View style={styles.container}>

        {/*
          Wraps Header and Body of the Card with the showDetail() callback to
          navegate the user to CardDetail as touched
        */}
        <TouchableWithoutFeedback onPress={this.showDetail}>
          <View>
            <Header
              userName={ownerUserName}
              timeStamp={timeStamp}
              containerStyle={styles.header}
            >
              <MoodIcon type={type} />
            </Header>
            <Body
              numberOfLines={2}
              text={body}
              containerStyle={styles.body}
            />
          </View>
        </TouchableWithoutFeedback>

        {/*
          Handles inside of SocialBar component
          both addSupport() and showDetail() callbacks
        */}
        <SocialBar
           addSupport={this.addSupport}
           supportCount={this.props.numberOfLikes}
           addComment={this.showDetail}
           commentCount={this.props.commentCount}
           isLiked={this.props.currentUserLiked}
           type={type}
        />

      </View>
    );
  }
}

// Defines default styles
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
                          // even on iPad, when a short description
                          // is given by the user
  },
  header: {
    paddingLeft: 15,
    paddingRight: 13,
  },
  body: {
    marginHorizontal: 20,
  },
});

const mapStateToProps = ({reaction}) => {
  const { numberOfLikes, currentUserLiked } = reaction;

  console.log('numberOfLikes card', numberOfLikes)
  console.log('currentUserLiked card', currentUserLiked)

  return { numberOfLikes, currentUserLiked };
};

export default connect(
  mapStateToProps,
  {
    setInitialReactionState,

  }
)(Card);
