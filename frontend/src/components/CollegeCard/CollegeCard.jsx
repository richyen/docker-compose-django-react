import React from 'react';
import Styled from 'styled-components';
import theme from '../../styles/theme';

const StyledImage = Styled.div`
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  position: relative;
  margin: 5px;
  border-radius: 2px;
`;

const StyledInfo = Styled.div`
  position: inherit;
  color: ${theme.colors.white};
  padding: 5%;
  top: 82%;
  text-align: left;
  font-family: 'Poppins';
  font-weight: 900;
`;

const CollegeCard = ({ name, imgUrl }) => {
  return (
    <div>
      <StyledImage imgUrl={imgUrl}>
        <StyledInfo>{!name ? 'not available' : name}</StyledInfo>
      </StyledImage>
    </div>
  );
};

export default CollegeCard;
