import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import CardList from './components/CardList';
import CardDetail from './components/CardDetail';
import CommentCreate from './components/CommentCreate';

//----------- Attention: Needs refactoring and simplification
//----------- Attention: Needs refactoring and simplification

const RouterComponent = () => {

  // Gets default styles
  const {
    cardListContainerStyle,
    cardDetailContainerStyle,
    commentCreateContainerStyle,
  } = styles;

  // Custom backButtonImage
  backButtonImage = require('./assets/white-back-button.png');

  // ---------- Attention: Take everything that is common to each scene and
  // ---------- pass to the Router component delivers as global
  return (
    <Router backButtonImage={backButtonImage} >

      <Scene
       key="cardList"
       component={CardList}
       title="Hello, Alex!"
       sceneStyle={cardListContainerStyle}
       titleWrapperStyle={{backgroundColor: '#275B00'}}
       titleStyle={{color: 'white', fontWeight: 'bold', fontSize: 22, alignSelf: 'flex-start'}}
       navigationBarStyle={{backgroundColor: '#275B00', borderBottomWidth: 0}}
       duration={1}
       passProps
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
        duration={1}
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
        duration={1}
      />

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
});

export default RouterComponent;
