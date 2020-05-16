import React from 'react';

import Footer from './Footer';

export default {
  component: Footer,
  title: 'Footer',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <Footer />;
