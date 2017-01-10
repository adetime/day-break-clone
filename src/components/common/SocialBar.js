import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { moodTypes, Button } from './';

console.log('Button', Button )

function SocialBar({
  type,
  supportCount,
  addSupport,
  commentCount,
  addComment,
  isLiked,
  likeIt
}){


  const moodStatus = moodTypes[type];
  const { container,
    socialIcon,
    socialSupport,
    commentContainer,
    socialText,
  } = styles;


  const source = isLiked ? moodStatus.socialLikedImage : moodStatus.socialImage;
  const defaultColor = '#999999';
  const socialColor = isLiked ? moodStatus.likedColor : defaultColor;
  console.log('socialColor', socialColor)

  //console.log('moodStatussocialTag', moodStatus.socialTagmoodStatus.socialTag)
  return(
    <View style={container}>


      <Button onPress={addSupport}>
          <Image source={source} style={socialIcon}></Image>
      </Button>

      <View style={socialSupport}>
        <Text style={[socialText, { color: socialColor}]}>{`${supportCount} ${moodStatus.socialTag}`}</Text>
      </View>

      <View style={commentContainer}>
        <Image source={require('./../../assets/comment.png')} style={socialIcon}></Image>
        <View style={socialSupport}>
          <Text style={[socialText, { color: defaultColor}]}>{`${commentCount} COMMENTS`}</Text>
          </View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 7,
    marginLeft: 15,
    marginRight: 13,
  },
  socialIcon: {
    width: 20,
    height: 20,
  },
  socialSupport:{
    height: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent:'space-around',
    marginLeft: 15,
    alignItems: 'center',
  },
  commentContainer:{
    height: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    marginRight: 5,
    alignItems: 'center',
  },
  socialText: {
    fontSize: 12,
  },
});


export { SocialBar };
