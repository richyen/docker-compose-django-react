import React from 'react';
import HeroImage from './HeroImage';

export default {
  component: HeroImage,
  title: 'HeroImage',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <HeroImage />;
