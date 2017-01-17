import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import CardList from './components/CardList';
import CardDetail from './components/CardDetail';

const RouterComponent = () => {
  const { cardListContainerStyle, cardDetailContainerStyle } = styles;
  return (
    <Router>

      <Scene
       key="cardList"
       component={CardList}
       title="Hello, Alex!"
       sceneStyle={cardListContainerStyle}
       titleWrapperStyle={{backgroundColor: '#275B00'}}
       titleStyle={{color: 'white', fontWeight: 'bold', fontSize: 22, alignSelf: 'flex-start'}}
       navigationBarStyle={{backgroundColor: '#275B00', borderBottomWidth: 0}}

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


        />
    </Router>
  );
};

const styles = StyleSheet.create({
  cardListContainerStyle: {
    paddingTop: 65,
    backgroundColor: '#275B00',

  },
  cardDetailContainerStyle: {
    paddingTop: 65,
    backgroundColor: 'white',
  },

});

export default RouterComponent;
