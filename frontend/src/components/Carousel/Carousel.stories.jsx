import React from 'react';
import Carousel from './Carousel';

export default {
  component: Carousel,
  title: 'Carousel',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <Carousel />;
