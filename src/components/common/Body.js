import React from 'react';
import { View, StyleSheet } from 'react-native';

// Gets custom text style for DayBreak
import { Paragraph } from './DBText';

// Receives data and/or custom styles as props
const Body = ({text, numberOfLines, containerStyle, textStyle}) => {

  // Resulting component
  return(
    <View style={[styles.container, containerStyle]}>

      <Paragraph
        numberOfLines={numberOfLines}
        style={[styles.text, textStyle]}
      >
        {text}
      </Paragraph>

    </View>
  );
};

// Defines default styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  text: {
    color: 'black',
  },
});

export { Body };
