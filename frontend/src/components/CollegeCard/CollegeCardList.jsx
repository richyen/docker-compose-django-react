import React from 'react';
import CollegeCard from './CollegeCard';
import Styled from 'styled-components';
import collegeData from './collegeData';

const StyledSection = Styled.div`
    margin-top: 24px;
`;

const StyledContainer = Styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    grid-gap: 30px 30px;
    cursor: pointer;
`;

const StyledItem = Styled.div`
    text-align: left;
`;

const StyledHeader = Styled.h3`
    grid-column-end: -1;
    grid-column-start: 1;
    text-align: left;
`;

//Need to switch this with API call that store affiliated colleges
const cards = collegeData.map((college, index) => {
  return (
    <StyledItem key={index + college.name}>
      <CollegeCard imgUrl={college.imgurl} name={college.name} />
    </StyledItem>
  );
});

const CollegeCardList = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledHeader>Affiliated Campuses</StyledHeader>
        {cards}
      </StyledContainer>
    </StyledSection>
  );
};

export default CollegeCardList;
