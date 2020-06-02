import React from 'react';
import Styled from 'styled-components';
import BlogCardHeader from './BlogCardHeader';
import BlogCardDescription from './BlogCardDescription';
import theme from '../../styles/theme';
import BlogCardImage from './BlogCardImage';
import welcome from '../../images/welcome.jpg';

//css styling
const SytledBackground = Styled.div`
    background-color: #C4C4C4;
    border-radius: 0 0 8px 8px;
    width: 330px;
    margin: -4px 0;
`;

const BlogCard = () => {
  return (
    <div>
      <BlogCardImage blogImage={welcome} />
      <SytledBackground>
        <BlogCardHeader blogTitle="Blog Title" />
        <BlogCardDescription blogDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet c" />
      </SytledBackground>
    </div>
  );
};

export default BlogCard;
