import React from 'react';
import CollegeCardList from './CollegeCardList';
import Styled from 'styled-components';
import theme from '../../styles/theme';

const StyledHeader = Styled.h2`
  text-align: left;
  width: 100%;
  padding: 0 210px;
`;

const StyledContainer = Styled.section`
  max-width: 1440px;
  padding: 0 195px;
`;

const CollegeSection = () => {
  return (
    <div>
      <StyledHeader>Affiliated Campuses</StyledHeader>
      <CollegeCardList />
    </div>
  );
};

export default CollegeSection;
