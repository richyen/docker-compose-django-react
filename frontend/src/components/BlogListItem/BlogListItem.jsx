import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
`;

const Image = styled.img`
  width: 360px;
  height: 200px;
  margin-right: 60px;
`;

const Title = styled.h3`
  margin: 0;
`;

const SubHeader = styled.h2`
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
`;

export class BlogListItem extends React.Component {
  render() {
    return (
      <Container>
        <Image
          src="https://semantic-ui.com/images/avatar2/large/molly.png"
          alt="image"
        />
        <Content>
          <Title>Transition to america</Title>
          <SubHeader>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </SubHeader>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fermentum pellentesque efficitur. Aliquam id lectus a libero egestas
            tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Se...
          </div>
          <a href="/">Read more</a>
        </Content>
      </Container>
    );
  }
}

export default BlogListItem;
