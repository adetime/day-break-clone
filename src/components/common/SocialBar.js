import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { moodTypes, Button, BasicButton } from './';

import {
  Heading4 as Caption,
} from './DBText';


const defaultColor = '#999999';

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
  const {
    containerStyle,
    iconStyle,
    socialSupport,
    commentContainer,
    captionStyle,
  } = styles;


  const source = isLiked ? moodStatus.socialLikedImage : moodStatus.socialImage;

  const reactionColor = isLiked ? moodStatus.likedColor : defaultColor;
  //console.log('socialColor', socialColor)

  //console.log('moodStatussocialTag', moodStatus.socialTagmoodStatus.socialTag)
  return(
    <View style={containerStyle}>

      <BasicButton onPress={addSupport}>
        <Image source={source} style={iconStyle}></Image>
        <Caption style={[captionStyle, { color: reactionColor}]}>{`${supportCount} ${moodStatus.socialTag}`}</Caption>
      </BasicButton>

      <BasicButton>
        <Image source={require('./../../assets/comment.png')} style={iconStyle}></Image>
        <Caption style={captionStyle}>{`${commentCount} COMMENTS`}</Caption>

      </BasicButton>



    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 7,
    marginHorizontal: 15,
    borderTopWidth: 2,
    borderColor: '#C5C5C5',


    //borderWidth: 2,
    //borderColor: 'red',
  },
  iconStyle: {
    width: 20,
    height: 20,
    //margin: 0,
  },
  /*socialSupport:{
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
  },*/
  captionStyle: {
    color: defaultColor,
    marginLeft: 20,
    marginRight: 20,
  },
});


export { SocialBar };