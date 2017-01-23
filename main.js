import Exponent from 'exponent';
import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';



import Router from './src/Router';

class App extends React.Component {

  componentDidMount() {

    const config = {
    apiKey: "AIzaSyCiHNJ_dKZXsqYDHVWtrsfLE0KMu31vP1w",
    authDomain: "daybreak-clone.firebaseapp.com",
    databaseURL: "https://daybreak-clone.firebaseio.com",
    storageBucket: "daybreak-clone.appspot.com",
    messagingSenderId: "725321853348"
    };

    firebase.initializeApp(config);

    // Listen for authentication state to change.
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log("You are authenticated now!");
      } else {
        // Do other things
        console.log("You have to be authenticated!");

        loginWithFacebook();
      }

    });

    loginWithFacebook = async () => {
      const { type, token } = await Exponent.Facebook.logInWithReadPermissionsAsync(
        '931912633610252',
        { permissions: ['public_profile', 'email'] }
      );

      if (type === 'success') {
        // Build Firebase credential with the Facebook access token.
        const credential = firebase.auth.FacebookAuthProvider.credential(token);

        console.log('credential', credential)

        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`);


        const {
          name,
          id,
          picture,  // not working
          age_range,
          user_birthday
        } = await response.json();

        Alert.alert(
          'Logged in!',
          `Hi ${name}!`,
        );


        console.log(`profile_picture = ${picture}`)
        console.log(`profile_id = ${id}`)
        console.log(`age_range = ${age_range}`)
        console.log(`user_birthday = ${user_birthday}`)



        // Sign in with credential from the Facebook user.
        firebase.auth().signInWithCredential(credential).catch((error) => {
          // Handle Errors here.
        });
      }
    };

  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <View style={styles.container}>
        <Router />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#275B00',
    flex: 1,
  },
});

Exponent.registerRootComponent(App);
