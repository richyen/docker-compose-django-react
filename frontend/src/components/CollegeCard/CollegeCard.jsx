import React from 'react';
import Styled from 'styled-components';
import theme from '../../styles/theme';
import { Image, Grid } from 'semantic-ui-react';

const StyledImage = Styled(Image)`
  width: 240px;
  height: 240px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 50%;
  transition: transform 0.5s;
  &:hover {
      transform: translateY(-2px);
  }
`;

const StyledTitle = Styled.div`
    position: relative;
    z-index: 1;
    font-size: ${theme.fontSizes.p};
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.5); 
    padding-top: 24px;
    bottom: 0%;
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
`;

const CollegeCard = ({ name, imgUrl, description }) => {
  return (
    <Grid textAlign="center" doubling stackable>
      <Grid.Row computer={2} mobile={16} tablet={2}>
        <StyledImage src={imgUrl} alt={description} />
      </Grid.Row>
      <Grid.Row computer={2} mobile={16} tablet={2}>
        <StyledTitle>{!name ? 'not available' : name}</StyledTitle>
      </Grid.Row>
    </Grid>
  );
};

export default CollegeCard;
