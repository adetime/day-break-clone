import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import {
  Heading1 as Name,
  Heading3 as TimeStamp,
} from './DBText';

function Header({children, userName, timeStamp, style}) {
  const {
    containerStyle,
    nameContainerStyle,
    nameTextStyle,
    timeStampStyle,
  } = styles;

  return (
    <View style={[containerStyle, style]}>
      {children}
      <View style={nameContainerStyle}>
        <Name style={nameTextStyle}>{userName}</Name>
      </View>
      <TimeStamp style={timeStampStyle}>{timeStamp}</TimeStamp>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
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
  nameContainerStyle:{
    height: 30,
    flex: 1,
    justifyContent:'center',
    paddingLeft: 15,
  },
  nameTextStyle: {
    color: '#A6AAAE',
  },
  timeStampStyle: {
    color: '#B1B3B7',
  },
});


export { Header };
