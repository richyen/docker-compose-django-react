import React from 'react';
import LanguageList from './LanguageList';

export default {
  component: LanguageList,
  title: 'LanguageList',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <LanguageList />;
