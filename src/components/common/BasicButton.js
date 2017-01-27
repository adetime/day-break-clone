import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback  } from 'react-native';

// Receives data and/or custom styles as props
const BasicButton = ({onPress, containerStyle, infoText, infoTextStyle, children}) => {

  // Resulting component
  return (
    <TouchableWithoutFeedback onPress={onPress}>

      <View style={styles.container}>
        <View style={[styles.containerButton,containerStyle]}>
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
