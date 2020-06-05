import React from 'react';
import welcome from '../../images/welcome.jpg';
import Styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import theme from '../../styles/theme';

const Container = Styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
`;

const StyledImage = Styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;

const StyledImageText = Styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate( -50%, -50% );
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px black;
  padding: 0 13.5%;
`;

const StyledButton = Styled(Button)`
  &&&{
    /* width: 35%; */
    min-width: 120px;
    padding: 1em 0;
    font-weight: normal;
  }
`;

const ApplyButton = Styled(StyledButton)`
  &&&{
    background-color: ${theme.colors.purple};
    border: 1px solid ${theme.colors.purple};
    color: white;
  }
`;

const ExploreButton = Styled(StyledButton)`
  &&&{
    background-color: transparent;
    border: 1px solid ${theme.colors.purple};
    color: ${theme.colors.purple};
  }
`;

const ButtonContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;
  margin: 3em auto auto auto;
`;

const HeroImage = () => {
  return (
    <Container>
      <StyledImage src={welcome} alt="Welcome" />
      <StyledImageText>
        <h1>International Student Mentorship</h1>
        <h3>Connecting international student to America</h3>
        <ButtonContainer>
          <ApplyButton>APPLY NOW</ApplyButton>
          <ExploreButton>EXPLORE</ExploreButton>
        </ButtonContainer>
      </StyledImageText>
    </Container>
  );
};

export default HeroImage;
