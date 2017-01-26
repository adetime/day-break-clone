import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { openingApp, checkUserAuthState } from './../actions'

const daybreakLogo = require('./../assets/daybreak-white-logo.png');
const backgroundImage = require('./../assets/welcome-blue-background.png');


class Opening extends Component {
  componentWillMount(){
    this.props.openingApp();

  }

  componentDidMount(){
    this.props.checkUserAuthState();

  }

  render(){
    return(
      <Image style={styles.backgroundContainer} source={backgroundImage}>
        <Image style={styles.logo} source={daybreakLogo} />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  logo: {
    width: 300,
    resizeMode: 'contain',
  },
});

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { openingApp, checkUserAuthState })(Opening);
