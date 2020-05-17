import React from 'react';

import EntireHeader from './Header';

export default {
  component: EntireHeader,
  title: 'EntireHeader',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <EntireHeader />;
