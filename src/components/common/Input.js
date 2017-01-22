import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

// Receives data and/or custom styles as props
const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  autoCapitalize,
  autoCorrect,
  maxLenght,
  inputStyle,
  labelStyle,
  containerStyle,
}) => {

  // Was given a label ?
  const labelText = (
    label ?
    <Text style={[styles.label, labelStyle]}> {label} </Text> :
    null
  );

  // Resulting component
  return (
    <View style={[styles.container, containerStyle]}>

      {labelText}

      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        maxLenght={maxLenght}
        style={[styles.input, inputStyle]}
      />

    </View>
  );
};
// secureTextEntry = {true} to hidden typed text
// autoCorrect = {false} avoid autocorrection on email and password
// Remember: TextInput shows height = 0  if no specified

// Defines default styles
const styles = StyleSheet.create({
  input: {
    color: 'rgba(115,115,115,1)',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2, // When has a 'label' takes 3/2 of container's width
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    borderBottomWidth: 1,
  }
});

export { Input };
