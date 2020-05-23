import CollegeCardList from 'components/CollegeCard';
import welcome from 'images/welcome.jpg';
import Section from 'layout/Section';
import React from 'react';
import Styled from 'styled-components';
import mixins from 'styles/mixins';

// TODO: Just testing things out
const StyledImage = Styled.img`
  width: 100%;
`;

const StyledLink = Styled.a`
  ${mixins.inlineLink}
`;

const Home = () => {
  return (
    <div>
      <Section>
        <StyledImage src={welcome} alt="Welcome" />
        <h3>
          Get connected with a <StyledLink>mentor</StyledLink>
        </h3>
        International Student Mentorship Program (ISMP) is a program to connect
        students with alumni and working professionals who have experienced the
        positive impact of having mentors. ISMP is organized by international
        student campus groups at colleges and universities across the United
        States. The program’s goal is to provide the benefits of having a mentor
        for international students. Get connected with our volunteer mentors and
        gain many opportunities to make life-long friends along the way!
        <CollegeCardList />
      </Section>
    </div>
  );
};

export default Home;
