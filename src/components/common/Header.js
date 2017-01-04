import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function Header({children, title, timeStamp}) {
  const { mainContainer, titleContainer, titleText, timeStampText } = styles;
  return (
    <View style={mainContainer}>
      {children}
      <View style={titleContainer}>
        <Text style={titleText}>{title}</Text>
      </View>
      <Text style={timeStampText}>{timeStamp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
    paddingLeft: 15,
    paddingRight: 13,
    /*
    */

  },
  titleContainer:{
    height: 30,
    flex: 1,
    justifyContent:'center',
    paddingLeft: 15,
  },
  titleText: {
    fontSize: 21,
    color: '#A6AAAE',
  },
  timeStampText: {
    fontSize: 12,
    color: '#B1B3B7',
  },
});


export { Header };
