import React from 'react';
import welcome from '../../images/welcome.jpg';
import Styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';

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

const StyledTitle = Styled.h1`
  font-family: ${theme.fonts.PTSerif};
  font-style: normal;
  font-weight: bold;
  font-size: ${theme.fontSizes.h1};
`;

const StyledSubTitle = Styled.h3`
  font-family: ${theme.fonts.Poppins};
  font-style: normal;
  font-weight: bold;
  font-size: ${theme.fontSizes.h3};
`;

const StyledButton = Styled(Button)`
  &&&{
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: normal;
    font-size: ${theme.fontSizes.sm};
    border-radius: 8px;
    height: 3.5rem;
    width: 11rem;
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
  justify-content: space-evenly;
  width: 60%;
  margin: 3rem auto auto auto;
`;

const HeroImage = () => {
  return (
    <Container>
      <StyledImage src={welcome} alt="Welcome" />
      <StyledImageText>
        <StyledTitle>International Student Mentorship</StyledTitle>
        <StyledSubTitle>
          Connecting international students to America
        </StyledSubTitle>
        <ButtonContainer>
          <Link as={Link} to="/application-form">
            <ApplyButton>APPLY NOW</ApplyButton>
          </Link>
          <ExploreButton>EXPLORE</ExploreButton>
        </ButtonContainer>
      </StyledImageText>
    </Container>
  );
};

export default HeroImage;
