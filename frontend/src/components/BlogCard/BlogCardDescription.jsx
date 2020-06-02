import React from 'react';
import Styled from 'styled-components';

import theme from '../../styles/theme';

//styling
const StyledCardDescription = Styled.p`
    width: 282px;
    height: 95px;
    left: 24px;
    top: 324px;
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: ${theme.colors.black};
    padding: 0 0px 2px 18px;
`;

const BlogCardDescription = ({ blogDescription }) => {
  return <StyledCardDescription>{blogDescription}</StyledCardDescription>;
};

export default BlogCardDescription;
