import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import styled from 'styled-components';
import { SubscribeNewsletter } from 'utils/agent';

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

  const submitOnEnter = event => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  const handleSubmit = event => {
    let body = {
      email: email
    };
    SubscribeNewsletter.post(body).then(response => {
      if (response['error']) {
        alert(response['error']);
      } else {
        alert('Successfully subscribed to mailing list');
      }
    });
  };

  const handleChange = (event, data) => {
    event.preventDefault();
    event.stopPropagation();
    //     console.log(data.value);
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
          <input onKeyPress={submitOnEnter} />
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
