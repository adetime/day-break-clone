import React from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';

const SwitchBar = ({
  targetTag,
  targetValueOn = 'Enabled',
  targetValueOff = 'Disabled',
  value,
  onValueChange,
  ...props
}) => {

  const targetValue =
    value
      ? targetValueOn
      : targetValueOff;

  return (
    <View style={styles.container}>
      <View style={styles.targetContainer}>
        <Text style={styles.targetTag}>{targetTag}</Text>
        <Text style={styles.targetValue}>{targetValue}</Text>
      </View>

      <View style={{flex: 1}}/>

      <View style={styles.switchContainer}>
        <Switch value={value} onValueChange={onValueChange} {...props}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 30,
    marginVertical: 10,
  },
  targetContainer: {

  },
  targetTag: {
    color: 'rgba(58,179,221,1)',
    fontSize: 18,
  },
  targetValue: {
    color: 'rgba(116,116,116,1)',
  },
  switchContainer: {
    
  },

});

export { SwitchBar };
