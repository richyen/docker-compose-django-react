import React from 'react';
import Styled from 'styled-components';
import BlogCardList from './BlogCardList';
import { Link } from 'react-router-dom';
//styling
const StyledSection = Styled.div`
    width: 90%;
    max-width: 1240px;
    margin: 24px auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 30px;

    @media only screen and (min-width: 500px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 850px) {
        grid-template-columns: repeat(3,1fr);
    }
`;

const StyledHeader = Styled.h3`
    grid-column-end: -1;
    grid-column-start: 1;
    text-align: left;
`;

const BlogCardSection = ({ title }) => {
  return (
    <StyledSection>
      <StyledHeader>
        <Link to="/welcome">
          <span>{title}</span>
        </Link>
      </StyledHeader>
      <BlogCardList />
    </StyledSection>
  );
};

export default BlogCardSection;
