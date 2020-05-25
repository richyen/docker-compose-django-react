import React from 'react';
import Subscribe from './Subscribe';

export default {
  component: Subscribe,
  title: 'Subscribe',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <Subscribe />;
