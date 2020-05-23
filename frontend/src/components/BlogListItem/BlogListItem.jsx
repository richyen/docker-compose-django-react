import React from 'react';
import styled from 'styled-components';
import media from '../../styles/media';
import mixins from '../../styles/mixins';

const BlogListPlaceholders = [
  {
    imageUrl: 'https://via.placeholder.com/200x150?text=first',
    title: 'Transition to America',
    subHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/'
  },
  {
    imageUrl: 'https://via.placeholder.com/200x150?text=second',
    title: 'Transition to America',
    subHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Something something.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Something something.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Something something.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Something something',
    link: '/'
  },
  {
    imageUrl: 'https://via.placeholder.com/200x150?text=third',
    title: 'Transition to America',
    subHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pellentesque efficitur. Aliquam id lectus a libero egestas tristique vitae ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/'
  }
];

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

export class BlogListItem extends React.Component {
  description(text) {
    // Add ellipsis if text is more than 500 characters
    const ellipsis = '...';
    const overflow = text.length > 500 ? ellipsis : '';
    return `${text.substr(0, 500)}${overflow}`;
  }

  render() {
    return (
      <div>
        {BlogListPlaceholders.map((item, index) => {
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

export default BlogListItem;
