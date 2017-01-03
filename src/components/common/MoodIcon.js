import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MoodTemplate } from './';

function MoodIcon({ type }) {
  console.log(moodTypes[type])

  moodStatus = moodTypes[type];
  console.log('icon', moodStatus.icon)
  return (
    <MoodTemplate
      icon={moodStatus.icon}
      backgroundColor={moodStatus.backgroundColor}
    />
  );
};


const moodTypes = {
  SUN: {
    backgroundColor: '#FDC41A',
    icon: require('./../../assets/sun-icon.png'),
  },
  CLOUD: {
    backgroundColor: '#3CC1AE',
    icon: require('./../../assets/cloud-icon.png'),
  },
  RAIN: {
    backgroundColor: '#7C26A6',
    icon: require('./../../assets/rain-icon.png'),
  },
  THUNDER: {
    backgroundColor: '#233371',
    icon: require('./../../assets/thunder-icon.png'),
  },
};


export { MoodIcon };
