import React from 'react';
import CollegeCardList from './CollegeCardList';

export default {
  component: CollegeCardList,
  title: 'CollegeCardList',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <CollegeCardList />;
