import React from 'react';
import {View, StyleSheet } from 'react-native';
import { Header, MoodIcon } from './';

function Card({type}){
  return(
    <View style={styles.container}>
    <Header
     title='Adeildo'
     timeStamp='17 m'
    >
      <MoodIcon type={type} />
    </Header>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 16,
    elevation: 5,
    borderRadius: 2,
  },
});

export { Card };
