import React from 'react';
import RenderBlog from './RenderBlog';

export default {
  component: RenderBlog,
  title: 'RenderBlog',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <RenderBlog />;
