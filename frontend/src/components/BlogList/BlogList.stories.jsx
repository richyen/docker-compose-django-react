import React from 'react';
import BlogList from './BlogList';

export const data = [
  {
    imageUrl: 'https://via.placeholder.com/200x150?text=first',
    title: 'Transition to America',
    subHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/'
  },
  {
    imageUrl: 'https://via.placeholder.com/200x150?text=second',
    title: 'Adjusting to the U.S.',
    subHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Something something.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Something something.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Something something.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Something something',
    link: '/'
  },
  {
    imageUrl: 'https://via.placeholder.com/200x150?text=third',
    title: 'Transition to America',
    subHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/'
  }
];

export default {
  component: BlogList,
  title: 'BlogList',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <BlogList data={data} />;
