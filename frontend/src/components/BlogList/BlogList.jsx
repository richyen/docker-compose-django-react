import React from 'react';
import styled from 'styled-components';
import media from '../../styles/media';
import mixins from '../../styles/mixins';

const ItemContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  max-width: 1000px;

  ${media.phone`flex-direction: column;align-items: center;`};
`;

const ImageContainer = styled.div`
  width: 30%;
  height: 200px;
  margin: 30px;
  overflow: hidden;

  ${media.phone`width: 80%;`};
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h3`
  margin: 0;
`;

const SubHeader = styled.h2`
  margin: 8px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 30px;
  width: 60%;

  ${media.phone`width: 80%;margin-top: 0;`};
`;

const StyledLink = styled.a`
  margin-top: 8px;
  width: fit-content;
  ${mixins.inlineLink}
`;

export class BlogList extends React.Component {
  description(text) {
    // Add ellipsis if text is more than 500 characters
    const ellipsis = '...';
    const overflow = text.length > 500 ? ellipsis : '';
    return `${text.substr(0, 500)}${overflow}`;
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        {data &&
          data.map((item, index) => {
            return (
              <ItemContainer key={index}>
                <ImageContainer>
                  <Image src={item.imageUrl} alt="image" />
                </ImageContainer>

                <Content>
                  <Title>{item.title}</Title>
                  <SubHeader>{item.subHeader}</SubHeader>
                  <div>{this.description(item.description)}</div>
                  <StyledLink href={item.link}>Read more</StyledLink>
                </Content>
              </ItemContainer>
            );
          })}
      </div>
    );
  }
}

export default BlogList;
