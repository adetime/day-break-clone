import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Header, Body } from './';

// Receives data and/or custom styles as props
const Comment = ({
  userName,
  message,
  timeStamp,
  containerStyle,
}) => {

  // Resulting component
  return (
    <View style={[styles.container, containerStyle]}>
      {/*
        Uses a small Header and a Body
      */}
      <Header
        userName={userName}
        timeStamp={timeStamp}
        containerStyle={styles.header}
        small
      />
      <Body text={message} />

    </View>
  );
};

// Defines default styles
const styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderColor: '#C5C5C5',
    marginHorizontal: 20,
  },
  header: {
    height: 20,
    marginTop: 8,
  }
});

export { Comment };
