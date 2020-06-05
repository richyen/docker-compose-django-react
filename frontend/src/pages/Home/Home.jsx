import welcome from '../../images/welcome.jpg';
import Section from '../../layout/Section';
import CollegeCardList from 'components/CollegeCard';
import React, { useState } from 'react';
import Styled from 'styled-components';
import Subscribe from 'components/Subscribe';
import { Link, useParams } from 'react-router-dom';
import HeroImage from 'components/HeroImage';
import theme from '../../styles/theme';
import { useParams } from 'react-router-dom';
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
  const [featuredBlogs, setFeaturedBlogs] = useState(
    [
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
    ]
  );

  Blogposts.getFeatured().then((data) => {
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
      <ul>{featuredBlogs.map((blog) => (
        <li>Title: {blog.title}, Description {blog.description}</li>
      ))}
      </ul>
      <Subscribe />
    </>
  );
};

export default Home;
