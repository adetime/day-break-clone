import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { moodTypes, Button } from './';

console.log('Button', Button )

function SocialBar({type, supportCount, addSupport, commentCount, addComment}){


  const moodStatus = moodTypes[type];
  const { container,
    socialIcon,
    socialSupport,
    socialComment,
    } = styles;
    //console.log('handleSupports', handleSupports)
  return(
    <View style={container}>

      <Button onPress={addSupport}>
        <Image source={moodStatus.socialImage} style={socialIcon}></Image>
      </Button>

      <View style={socialSupport}>
          <Text>{`${supportCount} STOKES`}</Text>
      </View>

      <View style={socialComment}>
          <Image source={require('./../../assets/comment.png')} style={socialIcon}></Image>
          <View style={socialSupport}>
            <Text>{`${commentCount} COMMENTS`}</Text>
          </View>
      </View>



    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
    paddingLeft: 15,
    paddingRight: 13,
    /*
    */

  },
  socialIcon: {
    width: 20,
    height: 20,
  },
  socialSupport:{
    height: 30,
    flex: 1,
    justifyContent:'center',
    paddingLeft: 15,
  },
  socialComment:{
    height: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    paddingRight: 25,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 21,
    color: '#A6AAAE',
  },
  timeStampText: {
    fontSize: 12,
    color: '#B1B3B7',
  },
});


export { SocialBar };
