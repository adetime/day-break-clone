import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {
  Paragraph,
} from './DBText';

const Body = ({text, style, numberOfLines }) => {
  return(
    <View style={styles.containerStyle}>
      <Paragraph
        numberOfLines={numberOfLines}
        style={styles.textStyle}
      >
      {text}
       </Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginVertical: 5,
    marginHorizontal: 20,
  },
  textStyle: {
    color: 'black',
  },
});

export { Body };
