import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import ProgressiveImage from './ProgressiveImage';
import styles from './styles';
import { StoryViewProps, StroyTypes } from './types';
import StoryVideo from './StoryVideo';

const StoryView = (props: StoryViewProps) => {
  const source = props?.stories?.[props?.progressIndex];
  const isCurrentIndex = props?.index === props?.storyIndex;

  const { height, width } = useWindowDimensions();

  return (
    <View style={[styles.divStory, { height, width }]} ref={props?.viewRef}>
      {source?.type === StroyTypes.Image && isCurrentIndex ? (
        <ProgressiveImage
          viewStyle={props?.imageStyle ?? styles.imgStyle}
          imgSource={{ uri: source.url ?? '' }}
          thumbnailSource={{ uri: source.url ?? '' }}
          onImageLoaded={props.onImageLoaded}
        />
      ) : (
        isCurrentIndex && (
          <StoryVideo
            source={source}
            pause={!!props.pause}
            index={props?.index}
            storyIndex={props?.storyIndex}
            setPause={props?.setPause}
            onVideoEnd={props?.onVideoEnd}
            onVideoProgress={props?.onVideoProgress}
            showSourceIndicator={props?.showSourceIndicator}
            sourceIndicatorProps={props?.sourceIndicatorProps}
            videoProps={props?.videoProps}
          />
        )
      )}
    </View>
  );
};

export default StoryView;
