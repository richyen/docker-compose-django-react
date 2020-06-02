import React from 'react';
import BlogCard from './BlogCard';

export default {
  component: BlogCard,
  title: 'BlogCard',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <BlogCard />;
