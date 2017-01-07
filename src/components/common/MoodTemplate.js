import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function MoodTemplate({ icon, backgroundColor }) {
  console.log('backgroundColor', backgroundColor)
  return (
    <View style={styles.fakeBorder}>
      <View style={[styles.floatView, { backgroundColor: backgroundColor} ]}>
        <Image source={icon} style={styles.icon}></Image>
      </View>
    </View>
  );
};

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
    /*backgroundColor: '#FDC41A',*/
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
});

export { MoodTemplate };
