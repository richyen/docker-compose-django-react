import React from 'react';
import Styled from 'styled-components';

// Refactored this component as a Styled Components usage example
const HomeText = Styled.p`
    margin-left: 5%;
`;

const Home = () => {
  return <HomeText>I'm Home</HomeText>;
};

export default Home;
