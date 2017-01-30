import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback  } from 'react-native';

// Receives data and/or custom styles as props
const BasicButton = ({
  onPress,
  parentStyle,
  style,
  infoText,
  infoTextStyle,
  children
}) => {

  // Resulting component
  return (
    <TouchableWithoutFeedback onPress={onPress}>

      <View style={[styles.container, parentStyle]}>
      
        <View style={[styles.containerButton, style]}>
          {children}
        </View>

        <Text style={[styles.infoText, infoTextStyle]}>{infoText}</Text>

      </View>

    </TouchableWithoutFeedback>
  );
};

// Defines default styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 45,
  },
  infoText: {
    marginTop: 3,
  },
});

export { BasicButton };
