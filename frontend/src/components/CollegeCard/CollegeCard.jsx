import React from 'react';
import Styled from 'styled-components';
import theme from '../../styles/theme';

// const StyledImage = Styled.div`
//   width: 200px;
//   height: 200px;
//   background-repeat: no-repeat;
//   background-image: url(${props => props.imgUrl});
//   background-size: cover;
//   position: relative;
//   margin: 5px;
//   border-radius: 2px;
// `;

// const StyledInfo = Styled.div`
//   position: inherit;
//   color: ${theme.colors.white};
//   padding: 5%;
//   top: 82%;
//   text-align: left;
//   font-family: 'Poppins';
//   font-weight: 900;
// `;

const StyledCard = Styled.div`
    background-image: url(${props => props.imgUrl});
    width: 230px;
    height: 150px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    border-radius: 2%;
    transition: transform 1.0s;
    &:hover {
        transform: translateY(-10px);
    }
`;

const StyledTitle = Styled.h6`
    margin: 0;
    width: 100%;
    top: 81%;
    padding: 2% 8%;
    color: ${theme.colors.white};
    position: relative;
    z-index: 1;
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.5); 
`;

const CollegeCard = ({ name, imgUrl }) => {
  return (
    <StyledCard imgUrl={imgUrl}>
      <StyledTitle>{!name ? 'not available' : name}</StyledTitle>
    </StyledCard>
  );
};

export default CollegeCard;
