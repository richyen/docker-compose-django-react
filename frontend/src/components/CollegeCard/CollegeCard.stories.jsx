import React from 'react';
import CollegeCard from './CollegeCard';

export default {
  component: CollegeCard,
  title: 'CollegeCard',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <CollegeCard />;
