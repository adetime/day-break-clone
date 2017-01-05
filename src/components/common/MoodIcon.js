import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { moodTypes, MoodTemplate } from './';

function MoodIcon({ type }) {
const moodStatus = moodTypes[type];
  return (
    <MoodTemplate
      icon={moodStatus.icon}
      backgroundColor={moodStatus.backgroundColor}
    />
  );
};

export { MoodIcon };
