import React, { useState } from 'react';
import { Button, Input, Form } from 'semantic-ui-react';
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
  font-weight: bold;
  margin-bottom: 24px;
`;

const SearchContainer = styled.div`
  width: 70%;
  min-width: 500px;
`;

const SearchButton = styled(Button)`
  &&& {
    color: white;
    background: black;
  }
`;

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    if (event.key == 'Enter') {
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
      <Title>Subscribe to our weekly newsletter</Title>
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
