import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Receives data and/or custom styles as props
const MoodTemplate = ({
  icon,
  backgroundColor,
  containerStyle,
  iconStyle,
}) => {

  // Defines a costum mood's style
  const moodStyle = [
    styles.floatView,
    { backgroundColor: backgroundColor},
    containerStyle,
  ];

  // Resulting component
  return (
    <View style={styles.fakeBorder}>

      <View style={moodStyle}>
        <Image source={icon} style={[styles.icon, iconStyle]}></Image>
      </View>

    </View>
  );
};

// Defines default styles
const styles = StyleSheet.create({
  fakeBorder: {
    /*
    Change this when Android's borderRadius
    begins work together with borderBottomWidth.
    */
    width: 50,
    height: 50,
    backgroundColor: '#C5C5C5',
    alignItems: 'center',
    borderRadius: 50,
  },
  floatView: {
    width: 48,
    height: 48,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
});

export { MoodTemplate };
