import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { SubscribeNewsletter } from 'utils/agent';

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
  font-family: ${theme.fonts.Poppins};
  font-style: normal;
  font-weight: bold;
  font-size: ${theme.fontSizes.h3};
  margin-bottom: 24px;
`;

const SearchContainer = styled.div`
  width: 40%;
  min-width: 450px;
`;

const SearchButton = styled(Button)`
  &&& {
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: bold;
    font-size: ${theme.fontSizes.sm};
    color: white;
    background: ${theme.colors.purple};
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
      <Title>Subscribe to our monthly newsletter</Title>
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
