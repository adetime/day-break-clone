import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import {
  Heading1 as BigName,
  Paragraph as NormalName,
  Heading3 as TimeStamp,

} from './DBText';

function Header({children, userName, timeStamp, style, small}) {
  const {
    containerStyle,
    nameContainerStyle,
    nameTextStyle,
    timeStampStyle,
    iconStyle,
  } = styles;

  const Name = (
    small ?
    <NormalName style={{color: 'black',}}>{userName}</NormalName> :
    <BigName style={nameTextStyle}>{userName}</BigName>
  );




  return (
    <View style={[containerStyle, style]}>
      <View style={{marginRight: children ? 15 : 0}}>
          {children}
      </View>

      <View style={nameContainerStyle}>
        {Name}
      </View>
      <TimeStamp style={small ? {color: 'black'} : timeStampStyle}>{timeStamp}</TimeStamp>
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
    //paddingLeft: 15,
    //paddingRight: 13,
    /*
    */

  },
  iconStyle: {
  //  marginRight: margin ? 15 : 0,
  },
  nameContainerStyle:{
    height: 30,
    flex: 1,
    justifyContent:'center',
    //paddingLeft: 15,
  },
  nameTextStyle: {
    color: '#A6AAAE',
  },
  timeStampStyle: {
    color: '#B1B3B7',
  },
});


export { Header };
