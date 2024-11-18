import React from 'react';
import { render } from '@testing-library/react-native';
import StoryView from '../StoryView';
import StoryContainer from '../StoryContainer';
import ProgressView from '../ProgressView';
import { Footer } from '../../Footer';

jest.useFakeTimers();
jest.mock('react-native-video', () => 'Video');

describe('StoryView component', () => {
  it('Match Snapshot', () => {
    const { toJSON } = render(
      <StoryView videoDuration={[]} stories={[]} progressIndex={0} />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

describe('StoryContainer component', () => {
  it('Match Snapshot', () => {
    const { toJSON } = render(
      <StoryContainer visible stories={[]} maxVideoDuration={5} />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

describe('ProgressView component', () => {
  it('Match Snapshot', () => {
    const { toJSON } = render(
      <ProgressView
        storyIndex={0}
        isLoaded
        duration={10}
        pause={false}
        stories={[]}
        currentIndex={0}
        currentStory={{}}
        length={[]}
        progress={{}}
        videoDuration={[]}
        setVideoDuration={() => {}}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

describe('StoryView should render Footer component', () => {
  it('Match Snapshot', () => {
    const { toJSON } = render(
      <StoryContainer stories={[]} renderFooterComponent={() => <Footer />} />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
