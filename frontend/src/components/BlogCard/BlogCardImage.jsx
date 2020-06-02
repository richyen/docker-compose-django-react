import React from 'react';
import Styled from 'styled-components';

//styling
const StyledCardImage = Styled.img`
    inset: 0% 0% 0% 44.02%;
    width: 330px;
    border-radius: 8px 8px 0px 0px;
`;

const BlogCardImage = ({ blogImage }) => {
  return <StyledCardImage src={blogImage} />;
};

export default BlogCardImage;
