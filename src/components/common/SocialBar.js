import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { moodTypes, BasicButton } from './';

// Gets special text components to DayBreak app design
import { Heading4 as Caption } from './DBText';

// Receives data and/or custom styles as props
const SocialBar = ({
  type,
  supportCount,
  addSupport,
  commentCount,
  addComment,
  isLiked,
  vertical,
  containerStyle,
}) => {

  // Access the mood's status
  const moodStatus = moodTypes[type];

  // Specifies the support icon based on mood's type
  // and if the user already given its support
  const supportIcon = (
    isLiked ?
    moodStatus.socialLikedImage :
    moodStatus.socialImage
  );

  // Takes the default comment icon
  const commentIcon = require('./../../assets/comment.png');

  // Defines the default caption color for buttons
  const defaultColor = '#999999';

  // Specifies the color of support tag based on mood's type
  // and if the user already given its support
  const reactionColor = isLiked ? moodStatus.likedColor : defaultColor;

  // Defines caption support style and text content
  const captionSupportStyle = [styles.caption, { color: reactionColor}];
  const captionSupportText = `${supportCount} ${moodStatus.socialTag}`;

  // Defines caption comment style and text content
  const captionCommentStyle = [styles.caption, { color: defaultColor}];
  const captionCommentText = `${commentCount} COMMENTS`;

  // Changes buttonStyle when in vertical mode
  // to fit the design at CardDetail
  const buttonStyle = vertical ? {flexDirection: 'column'} : {};

  // Creates a clickable element to fill out the space between
  // the two buttons when in the Card component
  const fakeButton = (
    vertical ?
    null :
    <BasicButton onPress={addComment} containerStyle={{flex: 1}}/>
  );

  // Resulting component
  return(
    <View style={[styles.container, containerStyle]}>

      <BasicButton onPress={addSupport} containerStyle={buttonStyle}>
        <Image source={supportIcon} style={styles.icon}></Image>
        <Caption style={captionSupportStyle}>
          {captionSupportText}
        </Caption>
      </BasicButton>

      {fakeButton}

      <BasicButton onPress={addComment} containerStyle={buttonStyle}>
        <Image source={commentIcon} style={styles.icon}></Image>
        <Caption style={captionCommentStyle}>
          {captionCommentText}
        </Caption>
      </BasicButton>

    </View>
  );
};

// Defines default styles
const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 7,
    marginHorizontal: 15,
    borderTopWidth: 2,
    borderColor: '#C5C5C5',
  },
  icon: {
    width: 20,
    height: 20,
  },
  caption: {
    marginLeft: 20,
    marginRight: 20,
  },
});


export { SocialBar };
