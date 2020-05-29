import React from 'react';
import BlogSearch from './BlogSearch';
import { data } from '../BlogList/BlogList.stories';

export default {
  component: BlogSearch,
  title: 'BlogSearch',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <BlogSearch data={data} />;
