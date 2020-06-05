import React from 'react';
import CollegeCardList from '../../components/CollegeCard';
import Styled from 'styled-components';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';
import { Grid, Image, Container } from 'semantic-ui-react';

const Section = Styled.div`
    padding: 32px 10%;
`;

const StyledH3 = Styled.h3`
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: bold;
    font-size: 56px;
    line-height: 84px;
`;

const StyledBodyText = Styled.p`
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
`;

const StyledH2 = Styled.h2`
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
`;

const StyledSecH3 = Styled.h3`
    font-family: ${props => (props.font ? props.font : theme.fonts.Poppins)};
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;

`;

const StyledImage = Styled(Image)`
    border-radius: 5%;
`;

const StyledLink = Styled(Link)`
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    text-decoration-line: underline;
    &: active {
        color: #2C01C5;
    }
`;

const About = () => {
  return (
    <Container>
      <Section>
        <Grid doubling stackable>
          <Grid.Row columns={1}>
            <StyledH3>About Us</StyledH3>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column width={10}>
              <StyledBodyText>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                semper sed est nec imperdiet. Integer vulputate vitae libero
                quis tempus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Aenean mollis eget lacus
                vel mollis. Nunc sit amet eros consectetur, aliquet diam id,
                efficitur ipsum. Nunc eget mi sagittis, tincidunt tortor ut,
                scelerisque sem. Phasellus quis est ut mi faucibus posuere at
                sed ex. Morbi bibendum tempus diam vel egestas. Vivamus eleifend
                tellus ante, in molestie nibh varius sit amet. In rhoncus ante
                nec nisi sodales accumsan. Suspendisse porttitor ligula nec urna
                ornare, ut hendrerit nisl efficitur. Maecenas porta lorem
                rhoncus tellus porta, et sagittis magna iaculis. Nulla efficitur
                purus eu lacinia mattis. Aliquam nec arcu odio. Suspendisse a
                commodo urna. Praesent vestibulum suscipit arcu tincidunt
                blandit.
              </StyledBodyText>
            </Grid.Column>
            <Grid.Column width={6}>
              <StyledImage
                size="large"
                src="https://images.squarespace-cdn.com/content/v1/5d4ce82e08242000010863a1/1566366189899-AUEJHMXX6K86JV7ET2GQ/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Membership_WL-9a.jpg?format=2500w"
                alt="ismp hangout time to show about us"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <StyledH2>Frequently Asked Questions</StyledH2>
          </Grid.Row>
          <Grid.Row>
            <StyledSecH3>Tantaene caelistibus animis irae?</StyledSecH3>
            <StyledBodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              facilisis ligula quis quam accumsan rutrum. Integer tempus aliquet
              quam vel imperdiet. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Vivamus id dolor nec turpis lacinia congue.
              Quisque in sollicitudin justo.
            </StyledBodyText>
          </Grid.Row>
          <Grid.Row>
            <StyledSecH3>Tantaene caelistibus animis irae?</StyledSecH3>
            <StyledBodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              facilisis ligula quis quam accumsan rutrum. Integer tempus aliquet
              quam vel imperdiet. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Vivamus id dolor nec turpis lacinia congue.
              Quisque in sollicitudin justo.
            </StyledBodyText>
          </Grid.Row>
          <Grid.Row>
            <StyledSecH3>Tantaene caelistibus animis irae?</StyledSecH3>
            <StyledBodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              facilisis ligula quis quam accumsan rutrum. Integer tempus aliquet
              quam vel imperdiet. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Vivamus id dolor nec turpis lacinia congue.
              Quisque in sollicitudin justo.
            </StyledBodyText>
          </Grid.Row>
        </Grid>
      </Section>
      <Section style={{ padding: '0px 10%' }}>
        <CollegeCardList />
      </Section>
      <Section>
        <Grid>
          <Grid.Row textAlign="center">
            <Grid.Column>
              <StyledSecH3
                style={{ marginRight: '64px' }}
                font={theme.fonts.PTSerif}
              >
                Don't see your campus?
              </StyledSecH3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column width={13}>
              <StyledBodyText>
                You can still apply to get connected to a mentor nearby, or
                request mentorship at your campus!
              </StyledBodyText>
            </Grid.Column>
            <Grid.Column computer={3} mobile={16} tablet={2}>
              <StyledLink to="/application-form">Apply Now</StyledLink>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Section>
    </Container>
  );
};

export default About;
