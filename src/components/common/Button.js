import React, { Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

function Button({onPress, children}){
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,



  /*

    alignItems: 'center',
    justifyContent: 'center',*/
  },
});

export { Button };
