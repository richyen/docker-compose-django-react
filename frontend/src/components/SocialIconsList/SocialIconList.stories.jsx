import React from 'react';
import SocialIconList from './SocialIconsList';


export default {
  component: SocialIconList,
  title: 'SocialIconList',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => <SocialIconList />;