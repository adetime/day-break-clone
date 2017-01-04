import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Card, MoodIcon, Header } from './src/components/common';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card type='SUN' />
        <Card type='CLOUD' />
        <Card type='RAIN' />
        <Card type='THUNDER' />
        <Card type='RAIN' />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#275B00',
    flex: 1,

  /*

    alignItems: 'center',
    justifyContent: 'center',*/
  },
});

Exponent.registerRootComponent(App);
