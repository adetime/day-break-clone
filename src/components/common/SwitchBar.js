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
        <Switch value={value} onValueChange={onValueChange}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 30,
    marginVertical: 10,
    //justifyContent: 'space-between',

    //borderWidth: 1,
    //borderColor: 'yellow',
  },
  targetContainer: {
    //borderWidth: 1,
    //borderColor: 'red',
  },
  targetTag: {
    color: 'rgba(58,179,221,1)',
    fontSize: 18,
  },
  targetValue: {
    color: 'rgba(116,116,116,1)',
  },
  switchContainer: {
    //borderWidth: 1,
    //borderColor: 'green',
  },

});

export { SwitchBar };
