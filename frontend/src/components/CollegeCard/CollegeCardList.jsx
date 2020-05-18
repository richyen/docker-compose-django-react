import React from 'react';
import CollegeCard from './CollegeCard';
import Styled from 'styled-components';
import collegeData from './collegeData';

const StyledContainer = Styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 195px;
`;

//Need to switch this with API call that store affiliated colleges
const cards = collegeData.map((college, index) => {
  return (
    <CollegeCard imgUrl={college.imgurl} key={index} name={college.name} />
  );
});

const CollegeCardList = () => {
  return <StyledContainer>{cards}</StyledContainer>;
};

export default CollegeCardList;
