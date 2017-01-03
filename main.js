import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { MoodIcon } from './src/components/common';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open my new app!</Text>
        <MoodIcon type={'SUN'} />
        <MoodIcon type={'CLOUD'} />
        <MoodIcon type={'RAIN'} />
        <MoodIcon type={'THUNDER'} />
        <MoodIcon type={'SUN'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Exponent.registerRootComponent(App);
