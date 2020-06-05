import React from 'react';
import Styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import mixins from 'styles/mixins';
import Subscribe from 'components/Subscribe';
import { useParams } from 'react-router-dom';
import HeroImage from 'components/HeroImage';
import theme from '../../styles/theme';

// TODO: Just testing things out
const MentorContainer = Styled.div`
  padding: 1.5em 17.5%;
  background-color: ${theme.colors.darkGrey}
`;

const ItalizedParagraph = Styled.p`
  font-style: italic;
`;

const mentorContent =
  ' Our group of over 100 volunteer mentors includes graduates from top-tier college and graduate programs such as Harvard University, Stanford University, UC Berkeley, and other schools, who are now working professionals at well-respected companies. Each mentor has several years of experience supporting and advising students in their academic, professional, and personal lives, and is passionate about helping students overcome obstacles and seek new opportunities';

const DuoContainer = Styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap: 2%;
  align-items: flex-start;
  margin: 2em 0;
  padding: 0 13.5%;
  /* border: 1px red solid; */
`;

const BlurbContainer = Styled.div`
  width: 100%;
`;

const VideoPlaceholder = Styled.div`
  width: 100%;
  height: 200px;
  background-color: black;
`;

const whoBlurb =
  'International Student Mentorship Program is a nonprofit organization with a network of volunteer mentors across the United States. We are passionate about mentoring international students through their college and graduate school experience in America, from the admissions process all the way through graduation. Our goal is to provide international students with a mentor that can guide them through each step of college, grad school, and beyond.';
const diffBlurb =
  'We provide training and resources not only for academic success, but also personal growth. We believe that life is more than a transcript or a job title, and we want to help international students make the most of their experience studying in America.';

const StyledLink = Styled.a`
  ${mixins.inlineLink}
`;

const SubHeader = Styled.div`
  padding: 0 13.5%;
`;

const viewMoreLink = Styled.link``;

const Home = () => {
  return (
    <div>
      <HeroImage />
      <DuoContainer>
        <BlurbContainer>
          <h3>Who Are We?</h3>
          <p>{whoBlurb}</p>
        </BlurbContainer>
        <VideoPlaceholder />
      </DuoContainer>

      <MentorContainer>
        <h4>OUR MENTORS</h4>
        <ItalizedParagraph>{mentorContent}</ItalizedParagraph>
      </MentorContainer>

      <DuoContainer>
        <BlurbContainer>
          <h3>What Makes Us Different?</h3>
          <p>{diffBlurb}</p>
        </BlurbContainer>
        <VideoPlaceholder />
      </DuoContainer>

      <Subscribe />
    </div>
  );
};

export default Home;

{
  /* <StyledImage src={welcome} alt="Welcome" />
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
      <Subscribe />s */
}

// <div>
//   <StyledImage src={welcome} alt="Welcome" />
//   <Section>
//     <h3>
//       Get connected with a <StyledLink>mentor</StyledLink>
//     </h3>
//     International Student Mentorship Program (ISMP) is a program to connect
//     students with alumni and working professionals who have experienced the
//     positive impact of having mentors. ISMP is organized by international
//     student campus groups at colleges and universities across the United
//     States. The program’s goal is to provide the benefits of having a mentor
//     for international students. Get connected with our volunteer mentors and
//     gain many opportunities to make life-long friends along the way!
//     <CollegeCardList />
//   </Section>
//   <Section>
//     <h3>What Makes Us Different.</h3>
//     We’re not the typical mentorship program. We aim to offer international
//     students a whole-life perspective and guidance.
//   </Section>
//   <Section>
//     <h2>Our Mentors</h2>
//     Our Mentors. We are volunteers who range from college graduate
//     professionals to PhD and Master’s candidates at top-tier universities.
//     We’re a little older, a little wiser, who can give you some practical
//     guidance. From improving your English to developing smart study habits,
//     we’re here to help. Come meet us!
//   </Section>
// </div>
