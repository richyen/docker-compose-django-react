import React from 'react';
import BlogListItem from './BlogListItem';

export default {
  component: BlogListItem,
  title: 'BlogListItem',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <BlogListItem />;
