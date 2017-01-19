import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback  } from 'react-native';

const BasicButton = ({onPress, containerStyle, children}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container,containerStyle]}>
        {children}
      </View>
    </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 45,

    //borderWidth: 2,
  },
});

export { BasicButton };
