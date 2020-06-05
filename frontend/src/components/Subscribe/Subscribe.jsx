import React, { useState } from 'react';
import { Button, Input, Form } from 'semantic-ui-react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Container = styled.div`
  /* grid-column: 1 / 15; */
  width: 100%;
  padding: 40px;
  background-color: ${theme.colors.darkGrey};
  text-align: center;
  display: grid;
  justify-items: center;
`;

const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 24px;
`;

const SearchContainer = styled.div`
  width: 50%;
  min-width: 500px;
`;

const SearchButton = styled(Button)`
  &&& {
    color: white;
    background: ${theme.colors.purple};
  }
`;

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    if (event.key === 'Enter') {
      console.log('PRESSED');
    } else {
      console.log('CLICKED');
    }
    console.log(email);
  };

  const handleChange = (event, data) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(data.value);
    setEmail(data.value);
  };

  return (
    <Container>
      <Title>Subscribe to our monthly newsletter</Title>
      <SearchContainer>
        <Input
          fluid
          placeholder="Email Address"
          type="email"
          onChange={handleChange}
          action
        >
          <input onKeyPress={handleSubmit} />
          <SearchButton
            type="submit"
            onClick={handleSubmit}
            content="Subscribe"
          />
        </Input>
      </SearchContainer>
    </Container>
  );
};

export default Subscribe;
