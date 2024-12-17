import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  ActivityIndicator,
  Platform,
  ActivityIndicatorProps,
} from 'react-native';
import Video, { VideoRef, OnBufferData } from 'react-native-video';
import type { OnLoadData, OnProgressData } from 'react-native-video';
import styles from './styles';
import { Colors } from '../../theme';
import type { StoryType } from './types';

const MIN_BUFFER_TIME = 1000 * 1;
const PlAYBACK_BUFFER_TIME = 1000 * 1;
const PLAYBACK_AFTER_REBUFFER = 1000 * 1;

interface StoryVideoProps {
  source: StoryType;
  pause: boolean;
  index?: number;
  storyIndex?: number;
  setPause?: (value: boolean) => void;
  onVideoEnd?: () => void;
  onVideoProgress?: (progressData?: OnProgressData) => void;
  onVideoLoaded?: (arg0: OnLoadData) => void;
  videoProps: any;
  showSourceIndicator?: boolean;
  sourceIndicatorProps?: ActivityIndicatorProps;
}

const StoryVideo = ({
  source,
  pause,
  index,
  storyIndex,
  setPause,
  onVideoEnd,
  onVideoProgress,
  onVideoLoaded,
  sourceIndicatorProps,
}: StoryVideoProps) => {
  const [loading, setLoading] = useState(true);
  const [buffering, setBuffering] = useState(true);

  const videoRef = useRef<VideoRef>(null);
  const videoData = useRef<OnLoadData>();

  const isCurrentIndex = index === storyIndex;

  useEffect(() => {
    if (index === storyIndex) {
      if (Platform.OS === 'android' || source?.url?.endsWith('m3u8')) {
        videoRef?.current?.seek(0);
      } else {
        videoRef?.current?.seek(1);
      }
    }
  }, [storyIndex, index, source?.url]);

  const loadVideo = async () => {
    if (isCurrentIndex) {
      if (videoData.current === undefined) {
        return;
      }
      if (loading) {
        setLoading(false);
      }
      if (buffering) {
        setBuffering(false);
      }
    }
  };

  const onBuffer = (data: OnBufferData) => {
    setBuffering(data.isBuffering);
  };

  return (
    <View style={{ flex: 1 }}>
      <Video
        ref={videoRef}
        resizeMode="cover"
        paused={pause || loading}
        source={{ uri: source?.url }}
        onSeek={event => {
          if (index === storyIndex) {
            if (Platform.OS === 'ios' && !source?.url?.endsWith('m3u8')) {
              if (event.seekTime === 1) {
                videoRef?.current?.seek(0.15);
                setPause?.(true);
                setPause?.(false);
                videoRef?.current?.resume();
              } else {
                videoRef?.current?.resume();
              }
            }
          }
        }}
        onEnd={onVideoEnd}
        onError={(_error: any) => {
          setLoading(false);
        }}
        onProgress={data => {
          if (isCurrentIndex) {
            onVideoProgress?.(data);
          }
        }}
        bufferConfig={{
          minBufferMs: MIN_BUFFER_TIME,
          bufferForPlaybackMs: PlAYBACK_BUFFER_TIME,
          bufferForPlaybackAfterRebufferMs: PLAYBACK_AFTER_REBUFFER,
        }}
        onBuffer={onBuffer}
        onLoad={(item: OnLoadData) => {
          videoData.current = item;
          videoRef?.current?.resume();
          loadVideo();
          onVideoLoaded?.(item);
        }}
        style={styles.contentVideoView}
      />
      {(loading || buffering) && (
        <ActivityIndicator
          animating
          pointerEvents="none"
          color={Colors.loaderColor}
          size="small"
          style={styles.loaderView}
          {...sourceIndicatorProps}
        />
      )}
    </View>
  );
};

export default React.memo(StoryVideo);
