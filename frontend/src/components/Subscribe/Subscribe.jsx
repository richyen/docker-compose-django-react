import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 40px;
  background-color: #c4c4c4;
  text-align: center;
  display: grid;
  justify-items: center;
`;

const Title = styled.h3`
  font-weight: 'bold';
  margin-bottom: 24px;
`;

const SearchContainer = styled.div`
  width: 70%;
  min-width: 500px;
`;

const Subscribe = () => {
  return (
    <Container>
      <Title>Subscribe to our weekly newsletter</Title>
      <SearchContainer>
        <Input
          fluid
          action={{ color: 'black', content: 'Subscribe' }}
          placeholder="Email Address"
          type="email"
        />
      </SearchContainer>
    </Container>
  );
};

export default Subscribe;
