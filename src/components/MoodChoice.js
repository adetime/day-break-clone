import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { moodChoice } from './../actions';

import { BasicButton } from './common';

const sun = require('./../assets/sun-choice.png');
const cloud = require('./../assets/cloud-choice.png');
const rain = require('./../assets/rain-choice.png');
const thunder = require('./../assets/thunder-choice.png');

const { width } = Dimensions.get('window');

class MoodChoice extends Component {

  onPressSun = () => {
    this.props.moodChoice({ type: 'SUN' });
  }

  onPressCloud = () => {
    this.props.moodChoice({ type: 'CLOUD' });
  }

  onPressRain = () => {
    this.props.moodChoice({ type: 'RAIN' });    
  }

  onPressThunder = () => {
    this.props.moodChoice({ type: 'THUNDER' });
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.callContainer}>
          <Text style={styles.callText}>How are you felling today?</Text>
        </View>

        <View style={styles.imageRows}>
          <BasicButton onPress={this.onPressSun}>
            <Image source={sun} style={styles.image}/>
          </BasicButton>
          <BasicButton onPress={this.onPressCloud}>
            <Image source={cloud} style={styles.image}/>
          </BasicButton>
        </View>

        <View style={[styles.imageRows]}>
          <BasicButton onPress={this.onPressRain}>
            <Image source={rain} style={styles.image}/>
          </BasicButton>
          <BasicButton onPress={this.onPressThunder}>
            <Image source={thunder} style={styles.image}/>
          </BasicButton>
        </View>

        <View style={styles.empty}>

        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  callContainer: {
    marginVertical: 20,
  },
  callText: {
    color: 'white',
    fontSize: 20,
  },
  imageRows: {
    flexDirection: 'row',
    width: (width - 40)/2,
  },
  image: {
    width: (width - 40)/2,
    height: (width - 40)/2,
  },
  empty: {
    flex: 1,
  },
});

const mapStateToProps = () => {
  return {};
};


export default connect(
  mapStateToProps,
  {moodChoice}
)(MoodChoice);
