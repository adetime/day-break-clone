import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback  } from 'react-native';

// Receives data and/or custom styles as props
const BasicButton = ({onPress, containerStyle, children}) => {

  // Resulting component
  return (
    <TouchableWithoutFeedback onPress={onPress}>

      <View style={[styles.container,containerStyle]}>
        {children}
      </View>

    </TouchableWithoutFeedback>
  );
};

// Defines default styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 45,
  },
});

export { BasicButton };
