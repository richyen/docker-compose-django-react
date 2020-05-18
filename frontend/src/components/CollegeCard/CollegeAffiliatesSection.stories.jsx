import React from 'react';
import CollegeAffiliatesSection from './CollegeAffiliatesSection.jsx';

export default {
  component: CollegeAffiliatesSection,
  title: 'CollegeAffiliatesSection',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <CollegeAffiliatesSection />;
