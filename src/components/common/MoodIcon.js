import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { moodTypes, MoodTemplate } from './';

// Receives the type data as props
const MoodIcon = ({ type }) => {

  // Access current mood's status
  const moodStatus = moodTypes[type];

  // Resulting component
  return (
    <MoodTemplate
      icon={moodStatus.icon}
      backgroundColor={moodStatus.backgroundColor}
    />
  );
};

export { MoodIcon };
