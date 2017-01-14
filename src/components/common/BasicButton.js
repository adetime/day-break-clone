import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback  } from 'react-native';

const BasicButton = ({onPress, style, children}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.containerStyle,style]}>
        {children}
      </View>
    </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  containerStyle: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-between',

    //borderWidth: 2,
  },
});

export { BasicButton };
