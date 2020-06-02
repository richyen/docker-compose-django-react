import React from 'react';
import Styled from 'styled-components';

import theme from '../../styles/theme';

//styling
const StyledCardHeader = Styled.h3`
    inset: 61.4% 7.27% 30.47 7.27%;
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-weight: 36px;
    color: ${theme.colors.black};
    padding: 8px 0px 18px 18px;
    margin: -8px 0 0 0;
    left: 24px;
`;

const BlogCardHeader = ({ blogTitle }) => {
  return <StyledCardHeader>{blogTitle}</StyledCardHeader>;
};

export default BlogCardHeader;
