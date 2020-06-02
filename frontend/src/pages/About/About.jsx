import React from 'react';
import Section from '../../layout/Section';
import CollegeCardList from '../../components/CollegeCard';
import Styled from 'styled-components';
import theme from '../../styles/theme';

const MainHeader = Styled.h1`
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: bold;
    font-size: 56px;
    line-height: 84px;
    left: 195px;
    top: 184px;
    grid-column-end: -1;
    grid-column-start: 1;
    color: ${theme.colors.black};
`;

const Article = Styled.p`
    width: 600px;
    height: 420px;
    left: 195px;
    top: 292px;
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: ${theme.colors.black};
`;

const StyledContainer = Styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 30px;
  
    @media only screen and (min-width: 500px) {
        grid-template-columns: 1fr 1fr;
    }
  
    @media (min-width: 850px) {
        grid-template-columns: repeat(3,1fr);
    }
`;

const StyledImage = Styled.img`
    width: 400px;
    height: 300px;
    left: 845px;
    top: 292px;
`;

const About = () => {
  return (
    <React.Fragment>
      <Section>
        <StyledContainer></StyledContainer>
        {/* <StyledContainer>
            <Article>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper sed est nec imperdiet. Integer vulputate vitae libero quis tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean mollis eget lacus vel mollis. Nunc sit amet eros consectetur, aliquet diam id, efficitur ipsum. Nunc eget mi sagittis, tincidunt tortor ut, scelerisque sem. Phasellus quis est ut mi faucibus posuere at sed ex. Morbi bibendum tempus diam vel egestas. Vivamus eleifend tellus ante, in molestie nibh varius sit amet. In rhoncus ante nec nisi sodales accumsan. Suspendisse porttitor ligula nec urna ornare, ut hendrerit nisl efficitur. Maecenas porta lorem rhoncus tellus porta, et sagittis magna iaculis. Nulla efficitur purus eu lacinia mattis. Aliquam nec arcu odio. Suspendisse a commodo urna. Praesent vestibulum suscipit arcu tincidunt blandit.
            </Article>
            <StyledImage src="https://images.squarespace-cdn.com/content/v1/59a76257914e6b82138bc3e0/1568494382423-WXH83MPC743Z2OAKFTJ9/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_20181130_220935.jpg" />
        </StyledContainer>
        <MainHeader>About Us</MainHeader>
        <CollegeCardList /> */}
      </Section>
    </React.Fragment>
  );
};

export default About;
