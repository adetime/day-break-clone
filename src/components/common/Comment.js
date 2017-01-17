import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Header, Body } from './';


const Comment = ({userName, message, timeStamp}) => {
  const { containerStyle, headerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Header userName={userName} timeStamp={timeStamp} style={headerStyle} small/>
      <Body text={message} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderTopWidth: 2,
    borderColor: '#C5C5C5',
    marginHorizontal: 20,
  },
  headerStyle: {
    height: 20,
    marginTop: 8,
  }
});
export { Comment };
