import welcome from '../../images/welcome.jpg';
import Section from '../../layout/Section';
import CollegeCardList from 'components/CollegeCard';
import React from 'react';
import Styled from 'styled-components';
import mixins from 'styles/mixins';
import RenderBlog from 'components/RenderBlog';
import { useParams } from 'react-router-dom';

// TODO: Just testing things out
const StyledImage = Styled.img`
  width: 100%;
`;

const StyledLink = Styled.a`
  ${mixins.inlineLink}
`;

const Home = () => {
  let { urlParams } = useParams();
  console.log(useParams);
  return (
    <div>
      <StyledImage src={welcome} alt="Welcome" />
      <Section>
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
      <Section>
        <h3>What Makes Us Different.</h3>
        We’re not the typical mentorship program. We aim to offer international
        students a whole-life perspective and guidance.
      </Section>
      <Section>
        <h2>Our Mentors</h2>
        Our Mentors. We are volunteers who range from college graduate
        professionals to PhD and Master’s candidates at top-tier universities.
        We’re a little older, a little wiser, who can give you some practical
        guidance. From improving your English to developing smart study habits,
        we’re here to help. Come meet us!
      </Section>
    </div>
  );
};

export default Home;
