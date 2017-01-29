import React, { Component} from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { onSubmitLoginWithEmail } from './../actions'
import { BasicButton, Input } from './common';

const daybreakLogo = require('./../assets/daybreak-white-logo.png');
const backgroundImage = require('./../assets/welcome-blue-background.png');

const { width, height } = Dimensions.get('window');

class LoginWithEmail extends Component {

  componentWillMount() {


  }

  onPressSubmit() {
    console.log('email submited')
    //this.props.onSubmitLoginWithEmail();
  }

  render(){
    return (
      <Image style={styles.container} source={backgroundImage}>


        {/* Heading message */}
        <View style={[styles.section, {flex: 3}]}>
          <Image style={styles.daybreakImage} source={daybreakLogo}/>
          <Text style={styles.welcomeText}>What're your email and password?</Text>
        </View>

        {/* Form */}
        <View style={[styles.section]}>

        <Input
        label="EMAIL"
        labelStyle={styles.labelText}
         placeholder="you@email.com"
         placeholderTextColor='rgba(185,224,239,1)'
         containerStyle={styles.formContainer}
         inputStyle={styles.inputText}
         keyboardType='email-address'
         autoCapitalize='none'
         autoCorrect={false}
         underlineColorAndroid='transparent'
        />

        <Input
         label="PASSWORD"
         labelStyle={styles.labelText}
         placeholder="your password"
         placeholderTextColor='rgba(185,224,239,1)'
         containerStyle={styles.formContainer}
         inputStyle={styles.inputText}
         autoCapitalize='none'
         autoCorrect={false}
         underlineColorAndroid='transparent'
         secureTextEntry
        />


        </View>

        <BasicButton
         containerStyle={styles.submitContainer}
         onPress={() => {}}
        >
          <Text style={styles.submitText}>Log in</Text>
        </BasicButton>

        {/* Free space */}
        <View style={[styles.section, {flex: 1}]} />

      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)',
    resizeMode: 'stretch',
  },
  section: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red',
    //borderWidth: 4,
  },
  daybreakImage: {
    width: 100,
    resizeMode: 'contain',
  },
  welcomeText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  labelText: {
    //color: ,
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  placeholderText: {
    color: 'rgba(185,224,239,1)',
  },
  inputText: {
    color: 'white',
    fontSize: 22,
  },
  submitContainer: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 300,
    marginHorizontal: 30,
    justifyContent: 'space-around',
    //marginTop: 20,
  },
  submitText: {
    color: 'rgba(58,179,221,1)',
    fontSize: 18,
  },
  formContainer: {
    width: 0.9*width,
    maxHeight: 50,
    marginBottom: 30,
    borderColor: 'rgba(185,224,239,1)',
  }

});

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return { user };
};

export default connect(
  mapStateToProps,
  {

  })(LoginWithEmail);
