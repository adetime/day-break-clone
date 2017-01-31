import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Opening from './components/Opening';
import Login from './components/Login';
import LoginWithEmail from './components/LoginWithEmail';
import CardList from './components/CardList';
import CardDetail from './components/CardDetail';
import MoodChoice from './components/MoodChoice';
import CardCreate from './components/CardCreate';
import CommentCreate from './components/CommentCreate';

//----------- Attention: Needs refactoring and simplification
//----------- Attention: Needs refactoring and simplification

const RouterComponent = () => {

  // Gets default styles
  const {
    cardListContainerStyle,
    cardDetailContainerStyle,
    commentCreateContainerStyle,
    loginContainerStyle,
    moodChoiceContainerStyle,
  } = styles;

  //console.log('props', props)
  //console.log('props.user', props.user)

  // User name to get by authentication
  const userName = "Alex";

  // Custom backButtonImage
  backButtonImage = require('./assets/white-back-button.png');

  // ---------- Attention: Take everything that is common to each scene and
  // ---------- pass to the Router component delivers as global
  return (
    <Router
     backButtonImage={backButtonImage}
     duration={1}
    >

      <Scene key="auth" >
        <Scene
          key="Opening"
          component={Opening}
          navigationBarStyle={{backgroundColor: 'transparent', borderBottomWidth: 0}}
        />

        <Scene
          key="login"
          component={Login}
          navigationBarStyle={{backgroundColor: 'transparent', borderBottomWidth: 0}}
          sceneStyle={loginContainerStyle}
        />

        <Scene
          key="loginWithEmail"
          component={LoginWithEmail}
          navigationBarStyle={{backgroundColor: 'transparent', borderBottomWidth: 0}}
          sceneStyle={loginContainerStyle}
        />




      </Scene>

      <Scene key="main" >
        <Scene
         key="cardList"
         component={CardList}
         title={`Hello, ${userName}`}
         sceneStyle={cardListContainerStyle}
         titleStyle={{color: 'white', fontWeight: 'bold', fontSize: 22, alignSelf: 'flex-start'}}
         navigationBarStyle={{backgroundColor: 'transparent', borderBottomWidth: 0}}

        />

        <Scene
         key="moodChoice"
         component={MoodChoice}
         title="Capture mood"
         sceneStyle={moodChoiceContainerStyle}
         titleWrapperStyle={{
           backgroundColor: '#rgba(41,46,79,1)',
           ...Platform.select({
             ios: { top: 10, },
           }),
         }}
         titleStyle={{color: 'white', fontSize: 19, alignSelf: 'flex-start'}}
         navigationBarStyle={{
           backgroundColor: '#rgba(41,46,79,1)',
           borderBottomWidth: 0,
           justifyContent:'flex-start',
         }}
         leftButtonStyle={{
           ...Platform.select({
             ios: { top: 13, },
           }),
         }}
         direction="vertical"

        />

        <Scene
         key="cardCreate"
         component={CardCreate}
         title="Capture mood"
         sceneStyle={moodChoiceContainerStyle}
         titleWrapperStyle={{
           backgroundColor: '#rgba(41,46,79,1)',
           ...Platform.select({
             ios: { top: 10, },
           }),
         }}
         titleStyle={{color: 'white', fontSize: 19, alignSelf: 'flex-start'}}
         navigationBarStyle={{
           backgroundColor: '#rgba(41,46,79,1)',
           borderBottomWidth: 0,
           justifyContent:'flex-start',
         }}
         leftButtonStyle={{
           ...Platform.select({
             ios: { top: 13, },
           }),
         }}
         direction="vertical"

        />

        <Scene
          key="cardDetail"
          component={CardDetail}
          title="Share detail"
          sceneStyle={cardDetailContainerStyle}
          titleWrapperStyle={{
            backgroundColor: '#275B00',
            ...Platform.select({
              ios: { top: 10, },
            }),
          }}
          titleStyle={{color: 'white', fontSize: 19, alignSelf: 'flex-start'}}
          navigationBarStyle={{
            backgroundColor: '#275B00',
            borderBottomWidth: 0,
            justifyContent:'flex-start',
          }}
          leftButtonStyle={{
            ...Platform.select({
              ios: { top: 13, },
            }),
          }}
          direction="vertical"

        />

        <Scene
          key="commentCreate"
          component={CommentCreate}
          title="Add comment"
          sceneStyle={commentCreateContainerStyle}
          titleWrapperStyle={{
            backgroundColor: '#275B00',
            ...Platform.select({
              ios: { top: 10, },
            }),
          }}
          titleStyle={{color: 'white', fontSize: 19, alignSelf: 'flex-start'}}
          navigationBarStyle={{
            backgroundColor: '#275B00',
            borderBottomWidth: 0,
            justifyContent:'flex-start',
          }}
          leftButtonStyle={{
            ...Platform.select({
              ios: { top: 13, },
            }),
          }}
          direction="vertical"

        />
      </Scene>


    </Router>
  );
};

// Defines default styles
const styles = StyleSheet.create({
  cardListContainerStyle: {
    paddingTop: 65,
    backgroundColor: '#275B00',
  },
  cardDetailContainerStyle: {
    paddingTop: 65,
    backgroundColor: 'white',
  },
  commentCreateContainerStyle: {
    paddingTop: 65,
    backgroundColor: 'rgba(250,250,250,1)',
  },
  moodChoiceContainerStyle: {
    paddingTop: 65,
    backgroundColor: 'rgba(41,46,79,1)',
  },
  loginContainerStyle: {
    //paddingTop: 65,
    backgroundColor: '#275B00',
  },
});

const mapStateToProps = ({ auth }) => {
  //console.log('auth ----------------------------------------------')
  //console.log(auth)
  //const { user } = auth;
  //console.log('user ----------------------------------------------')
  //console.log(user)
  return {};//{ displayName: user.displayName };
};

export default connect(mapStateToProps, {})(RouterComponent);
