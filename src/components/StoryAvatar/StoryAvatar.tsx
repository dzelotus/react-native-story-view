import React, { forwardRef } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import Animated from 'react-native-reanimated';
import styles from './styles';
import type { StoryAvatarProps } from './types';

const StoryAvatar = forwardRef<View, StoryAvatarProps>(
  (
    {
      item,
      index,
      openStories,
      viewedStories = [],
      userNameStyle,
      userImageStyle,
      userImageProps,
      viewedStoryContainerStyle,
      userNameProps,
      rootProps,
      containerStyle,
    }: StoryAvatarProps,
    ref
  ) => {
    const isUserStorySeen: boolean = viewedStories?.[index]?.every(
      (val: boolean) => val
    );

    const _userNameStyle = StyleSheet.flatten([styles.username, userNameStyle]);
    const _userImageStyle = StyleSheet.flatten([styles.image, userImageStyle]);
    const _containerStyle = StyleSheet.flatten([
      styles.imageContainer,
      containerStyle,
      (isUserStorySeen && viewedStoryContainerStyle) ??
        styles.viewedStoryContainer,
    ]);

    return (
      <Pressable
        onPress={gestureEvents => openStories?.(index, gestureEvents)}
        {...rootProps}>
        <Animated.View ref={ref}>
          <View style={_containerStyle}>
            <Image
              resizeMode="cover"
              source={{ uri: item?.profile }}
              style={[_userImageStyle]}
              {...userImageProps}
            />
          </View>
          <Text style={_userNameStyle} {...userNameProps}>
            {item?.username}
          </Text>
        </Animated.View>
      </Pressable>
    );
  }
);
export default StoryAvatar;
