import React from 'react';
import { Text, StyleSheet, Dimensions, PixelRatio  } from 'react-native';


export const Heading1 = ({style, ...props}) => {
  return <Text style={[styles.h1, style]} {...props} />;
}

const pixelRatio = PixelRatio.get();

const scale = Dimensions.get('window').width / 330;

const normalize = size => {
  if (pixelRatio === 2){
    console.log('pixelRatio === 2')
    return 1.15 * size;
  }
  if (pixelRatio === 3){
    console.log('pixelRatio == 2')
    return 1.35 * size;
  }
  return pixelRatio * size;
};


const styles = StyleSheet.create({
  title: {
    fontSize: normalize(30),
    lineHeight: normalize(33),
    color: 'red',
  },
  h1: {
    fontSize: normalize(21),
    color: 'red',
  },
  p: {
    fontSize: normalize(20),
    lineHeight: normalize(23),
    color: 'red',
  },
});
