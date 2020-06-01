import React from 'react';
import Quote from './Quote';

export default {
  component: Quote,
  title: 'Quote',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <Quote />;
