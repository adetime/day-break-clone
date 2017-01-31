import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Input, BasicButton } from './';

// Receives data and/or custom styles as props
const InputForm = ({
  items,
  placeholder,
  onChangeText,
  maxLength,
  reminderText,
  submitButtonText,
  containerStyle,
  inputContainerStyle,
  submitContainerStyle,
  reminderContainerStyle,
  reminderTextStyle,
  submitButtonStyle,
  submitButtonTextStyle,
  ...props
}) => {


  // Defines remider ratio
  const reminderRatio = (
    maxLength ?
    (
      <View style={[styles.reminderContainer, reminderContainerStyle]}>
        <Text style={[styles.reminderText, reminderTextStyle]}>
          {`${reminderText}/${maxLength}`}
        </Text>
      </View>
    ) : null
  );

  // Resulting component
  return (
    <View style={[styles.container, containerStyle]}>

      <View style={[styles.inputContainer, inputContainerStyle]}>
        <Input
         {...props}
         placeholder={placeholder}
         maxLength={maxLength}
         onChangeText={onChangeText}
        />
      </View>

      <View style={[styles.submitContainer, submitContainerStyle]}>
        {reminderRatio}

        <BasicButton style={[styles.submitButton, submitButtonStyle]}>
          <Text style={[styles.submitButtonText, submitButtonTextStyle]}>
            {submitButtonText}
          </Text>
        </BasicButton>
      </View>

    </View>
  );
};

// Defines default styles
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  inputContainer: {
    height: 150,
    //borderWidth: 1,
    //borderColor: 'white',
  },
  submitContainer: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
    marginTop: 5,
  },
  reminderContainer: {
    marginTop: 5,
  },
  reminderText: {
    color: 'rgba(115,115,115,1)',
  },
  submitButton: {
    backgroundColor: 'rgba(58,179,221,1)',
    marginTop: 10,
    justifyContent: 'center',
    width: 75,
    height: 30,
    borderRadius: 3,
  },
  submitButtonText: {
    color: 'white',
  },
});


export { InputForm };
