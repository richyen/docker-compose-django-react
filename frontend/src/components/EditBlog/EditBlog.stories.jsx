import React from 'react';
import EditBlog from './EditBlogModal';

export default {
  component: EditBlog,
  title: 'EditBlog',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <EditBlog />;
