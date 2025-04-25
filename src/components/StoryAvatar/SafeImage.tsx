/* eslint-disable no-console */
import React from 'react';
import { Image as RNImage, ImageProps as RNImageProps } from 'react-native';

let FinalImage: React.ComponentType<RNImageProps> = RNImage;

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  FinalImage = require('expo-image').Image;
} catch {}

const SafeImage: React.FC<RNImageProps> = props => {
  return <FinalImage {...props} />;
};

export default SafeImage;
