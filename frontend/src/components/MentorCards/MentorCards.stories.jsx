import React from 'react';
import MentorCards from './MentorCards';

export default {
  component: MentorCards,
  title: 'MentorCards',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <MentorCards />;
