import type {
  GestureResponderEvent,
  ImageStyle,
  PressableProps,
  TextProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import type { StoriesType } from '../StoryView/types';
import { FastImageProps } from 'react-native-fast-image';

export interface StoryAvatarProps extends StoryAvatarStyleProps {
  index: number;
  item?: StoriesType;
  pressedIndex?: number;
  isStoryViewVisible?: boolean;
  viewedStories?: boolean[][];
  openStories?: (position: number, gestureEvent: GestureResponderEvent) => void;
}

export interface StoryAvatarStyleProps {
  userNameStyle?: TextStyle;
  userImageStyle?: ImageStyle;
  containerStyle?: ViewStyle;
  userImageProps?: FastImageProps;
  userNameProps?: TextProps;
  rootProps?: PressableProps;
  viewedStoryContainerStyle?: ViewStyle;
}

export interface CircleAnimationProps {
  index: number;
  pressedIndex?: number;
  isStoryViewVisible?: boolean;
}
