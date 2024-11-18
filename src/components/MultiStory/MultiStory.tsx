import { cloneDeep } from 'lodash';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { FlatList, View } from 'react-native';
import { MultiStoryContainer } from '../MultiStoryContainer';
import { StoryAvatar } from '../StoryAvatar';
import type { StoryType } from '../StoryView';
import type { MultiStoryProps, MultiStoryRef } from './types';
import type { PointerType } from '../MultiStoryContainer/types';

const MultiStory = forwardRef<MultiStoryRef, MultiStoryProps>(
  ({ stories, transitionMode, avatarProps, ...props }, ref) => {
    const [isStoryViewVisible, setIsStoryViewShow] = useState<boolean>(false);
    const [pressedIndex, setPressedIndex] = useState<number>(-1);
    const [pointers, setPointers] = useState<PointerType>({
      pageX: 0,
      pageY: 0,
    });
    const profileRef = useRef<FlatList>(null);
    const itemsRef = useRef<View[]>([]);

    const openStories = (index: number) => {
      itemsRef.current?.[index]?.measure(
        (_x, _y, width, height, pageX, pageY) => {
          setPointers({
            pageX: (pageX ?? 0) + (width ?? 0) / 2,
            pageY: (pageY ?? 0) + (height ?? 0) / 2,
          });
        }
      );
      setIsStoryViewShow(true);
      setPressedIndex(index);
    };

    const { current: viewedStories } = useRef(
      Array(stories.length)
        .fill(stories)
        .map((row, index) =>
          row?.[index]?.stories.map((item: StoryType) => {
            return item?.customProps?.isSeen ?? false;
          })
        )
    );

    useImperativeHandle(ref, () => ({
      close: _onClose,
    }));

    const _onClose = () => {
      setIsStoryViewShow(false);
      props?.onComplete?.(viewedStories);
    };

    const onUserStoryIndexChange = (index: number) => {
      if (pressedIndex === index) {
        return;
      }
      profileRef.current?.scrollToIndex({ index, animated: false });
      setPressedIndex(index);
    };

    useEffect(() => {
      if (pressedIndex !== -1) {
        itemsRef.current?.[pressedIndex]?.measure(
          (_x, _y, width, height, pageX, pageY) => {
            setPointers({
              pageX: (pageX ?? 0) + (width ?? 0) / 2,
              pageY: (pageY ?? 0) + (height ?? 0) / 2,
            });
          }
        );
      }
    }, [pressedIndex]);

    return (
      <View>
        <FlatList
          ref={profileRef}
          horizontal
          data={stories}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item?.id?.toString()}
          renderItem={({ item, index }) => (
            <StoryAvatar
              ref={(elements: any) => (itemsRef.current[index] = elements)}
              {...{
                item,
                index,
                isStoryViewVisible,
                pressedIndex,
                openStories,
                viewedStories,
                ...avatarProps,
              }}
            />
          )}
          {...props}
        />
        {isStoryViewVisible && (
          <MultiStoryContainer
            visible={isStoryViewVisible}
            pointers={pointers}
            onComplete={_onClose}
            viewedStories={cloneDeep(viewedStories)}
            onChangePosition={(progressIndex, storyIndex: any) => {
              viewedStories[storyIndex][progressIndex] = true;
              props?.onChangePosition?.(progressIndex, storyIndex);
            }}
            onUserStoryIndexChange={onUserStoryIndexChange}
            transitionMode={transitionMode}
            {...props?.storyContainerProps}
            stories={stories}
            userStoryIndex={pressedIndex}
            renderOverlayView={props.renderOverlayView}
            overlayViewPostion={props.overlayViewPostion}
          />
        )}
      </View>
    );
  }
);

export default MultiStory;
