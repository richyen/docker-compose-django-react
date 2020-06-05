import React, { useState } from 'react';
import Styled from 'styled-components';
import Subscribe from 'components/Subscribe';
import { Link, useParams } from 'react-router-dom';
import HeroImage from 'components/HeroImage';
import theme from '../../styles/theme';
import { Blogposts } from '../../utils/agent';

// TODO: Just testing things out
const MentorContainer = Styled.div`
  padding: 1.5em 17.5%;
  background-color: ${theme.colors.darkYellow}
`;

const MentorTitle = Styled.h3`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.PTSerif};
  font-style: normal;
  font-weight: bold;
  font-size: ${theme.fontSizes.h3};
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
`;

const SubTitle = Styled.h3`
  font-family: ${theme.fonts.PTSerif};
  font-style: normal;
  font-weight: bold;
  font-size: ${theme.fontSizes.h2};
`;

const StyledParagraph = Styled.p`
  font-family: ${theme.fonts.Poppins};
  font-style: normal;
  font-weight: normal;
  font-size: ${theme.fontSizes.sm};
  line-height: 2rem;
`;

const ItalizedParagraph = Styled(StyledParagraph)`
  font-style: italic;
`;

const VideoPlaceholder = Styled.div`
  background-color: black;
  height: 287px;
`;

const TitleContainer = Styled.div`
  display: flex;
  padding: 0 13.5%;
  align-items: baseline;
`;

const StyledLink = Styled(Link)`
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: normal;
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.purple};
    padding: 0 2rem; 
`;

const whoBlurb =
  'International Student Mentorship Program is a nonprofit organization with a network of volunteer mentors across the United States. We are passionate about mentoring international students through their college and graduate school experience in America, from the admissions process all the way through graduation. Our goal is to provide international students with a mentor that can guide them through each step of college, grad school, and beyond.';
const diffBlurb =
  'We provide training and resources not only for academic success, but also personal growth. We believe that life is more than a transcript or a job title, and we want to help international students make the most of their experience studying in America.';

// const StyledLink = Styled.a`
//   ${mixins.inlineLink}
// `;

const Home = () => {
  console.log(useParams);
  const [featuredBlogs, setFeaturedBlogs] = useState([
    {
      title: 'placeholder',
      description: 'something'
    },
    {
      title: 'placeholder 2',
      description: 'something'
    },
    {
      title: 'placeholder 3',
      description: 'something'
    }
  ]);

  Blogposts.getFeatured().then(data => {
    // TODO: use setFeaturedBlogs to update featuredBlogs from the backend data
    // make sure to only update if it is in the initial state, otherwise it will
    // cause an inifinite loop
    if (featuredBlogs[0].title !== data[0].title) {
      setFeaturedBlogs(data);
    }
  });

  return (
    <>
      {/* <WelcomeImage src={welcome} alt="Welcome" /> */}
      <HeroImage />
      <DuoContainer>
        <div>
          <SubTitle>Who Are We?</SubTitle>
          <StyledParagraph>{whoBlurb}</StyledParagraph>
        </div>
        <VideoPlaceholder />
      </DuoContainer>

      <MentorContainer>
        <MentorTitle>OUR MENTORS</MentorTitle>
        <ItalizedParagraph>{mentorContent}</ItalizedParagraph>
      </MentorContainer>

      <DuoContainer>
        <div>
          <SubTitle>What Makes Us Different?</SubTitle>
          <StyledParagraph>{diffBlurb}</StyledParagraph>
        </div>
        <VideoPlaceholder />
      </DuoContainer>

      <TitleContainer>
        <SubTitle>Webinar Highlights</SubTitle>
        <StyledLink>view all</StyledLink>
      </TitleContainer>

      <TitleContainer>
        <SubTitle>Featured Blog Articles</SubTitle>
        <StyledLink>view all</StyledLink>
      </TitleContainer>

      <Subscribe />
    </>
  );
};

export default Home;
