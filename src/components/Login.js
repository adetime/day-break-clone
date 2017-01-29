import React, { Component} from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Alert } from 'react-native';
import { connect } from 'react-redux';

import { onPressLoginWithFacebook, onPressLoginWithEmail } from './../actions'
import { BasicButton } from './common';

const daybreakLogo = require('./../assets/daybreak-white-logo.png');
const facebookLogo = require('./../assets/facebook-logo.png');
const backgroundImage = require('./../assets/welcome-blue-background.png');


class Login extends Component {

  componentWillMount() {
    //this.props.checkUserAuthState();

  }

  onPressFacebookButton = () => {
    console.log('faceeeeeee')
    this.props.onPressLoginWithFacebook();
  }

  onPressEmailButton = () => {
    console.log('eamilllll')
    //Alert.alert('Cool, give email and password')
    this.props.onPressLoginWithEmail();
    //this.props.onPressLoginWithFacebook();
  }

  render(){
    return (
      <Image style={styles.container} source={backgroundImage}>


        {/* Welcome Message */}
        <View style={styles.section}>
          <Image style={styles.daybreakImage} source={daybreakLogo}/>
          <Text style={styles.welcomeText}>Welcome to Daybreak</Text>
        </View>

        {/* Signing up choice */}
        <View style={styles.section}>
          <BasicButton
           containerStyle={styles.facebookContainer}
           onPress={this.onPressFacebookButton}
           infoText="It's fast, and we NEVER post to Facebook."
           infoTextStyle={styles.facebookInfo}
          >
            <Image style={styles.facebookLogo} source={facebookLogo}/>
            <Text style={styles.facebookText}>Continue with Facebook</Text>
            <View style={styles.facebookDummy} />
          </BasicButton>



          <BasicButton
           containerStyle={styles.emailContainer}
           onPress={this.onPressEmailButton}
          >
            <Text style={styles.emailText}>Continue with Email</Text>
          </BasicButton>
        </View>

        {/* Space reservate to disclaimer message */}
        <View style={{flex: 0.7}} />

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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  daybreakImage: {
    width: 100,
    resizeMode: 'contain',
  },
  welcomeText: {
    color: 'white',
    fontSize: 30,
  },
  facebookContainer: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 300,
    marginHorizontal: 30,
    justifyContent: 'space-around',
    marginTop: 20,
  },
  facebookLogo: {
    width: 10,
    resizeMode: 'contain',
  },
  facebookText: {
    color: 'rgba(58,179,221,1)',
    fontSize: 18,
  },
  facebookDummy: {
    height: 10,
    width: 10,
  },
  facebookInfo: {
    color: 'white',
    fontSize: 10,
    marginTop: 2,
  },
  emailContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    width: 300,
    marginHorizontal: 30,
    justifyContent: 'space-around',
    marginTop: 20,
  },
  emailText: {
    color: 'white',
    fontSize: 18,
  },

});

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return { user };
};

export default connect(
  mapStateToProps,
  {
    onPressLoginWithFacebook,
    onPressLoginWithEmail,
  })(Login);
