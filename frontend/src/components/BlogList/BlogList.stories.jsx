import React from 'react';
import BlogList from './BlogList';

export default {
  component: BlogList,
  title: 'BlogList',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <BlogList />;
