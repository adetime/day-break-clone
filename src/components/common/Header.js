import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

// Gets special text components to DayBreak app design
import {
  Heading1 as BigName,
  Paragraph as NormalName,
  Heading3 as TimeStamp,
} from './DBText';

// Receives data and/or custom styles as props
const Header = ({
  userName,
  timeStamp,
  children,
  small,
  containerStyle,
  iconContainerStyle,
  titleContainerStyle,
  timeStampStyle,
  titleTextStyle,
}) => {

  // Defines title's style based on 'small' property
  const Title = (
    small ?
    <NormalName style={[{color: 'black'}, titleTextStyle]}>{userName}</NormalName> :
    <BigName style={[styles.titleText, titleTextStyle]}>{userName}</BigName>
  );

  // Defines timeStamp's style based on 'small' property
  const costumTimeStampStyle = (
    small ?
    [{color: 'black'}, timeStampStyle] :
    [styles.timeStamp, timeStampStyle]
  );

  // Defines icon's style based on 'children' property
  const costumIconContainerStyle = (
    children ?
    [{marginRight: 15}, iconContainerStyle] :
    [styles.icon, iconContainerStyle]
  );

  // Resulting component
  return (
    <View style={[styles.container, containerStyle]}>

      <View style={costumIconContainerStyle}>
        {children}
      </View>

      <View style={[styles.titleContainer, titleContainerStyle]}>
        {Title}
      </View>

      <TimeStamp style={costumTimeStampStyle}>
        {timeStamp}
       </TimeStamp>

    </View>
  );
};

// Defines default styles
const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
  },
  icon: {
    marginRight: 0,
  },
  titleContainer:{
    height: 30,
    flex: 1,
    justifyContent:'center',
  },
  titleText: {
    color: '#A6AAAE',
  },
  timeStamp: {
    color: '#B1B3B7',
  },
});

export { Header };
