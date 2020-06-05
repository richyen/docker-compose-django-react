import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

// TODO: come from an API later
const mentorsInfo = [
  {
    image: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
    name: 'Matthew',
    location: 'Los Angeles, CA',
    education: 'U.C. Berkeley',
    career: 'Software Engineer',
    skills: 'English Training, Web Development'
  },
  {
    image: 'https://semantic-ui.com/images/avatar2/large/molly.png',
    name: 'Molly',
    location: 'Los Angeles, CA',
    education: 'U.C. San Diego',
    career: 'UI Engineer',
    skills: 'English Training, Web Development'
  },
  {
    image: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
    name: 'Jennifer',
    location: 'Los Angeles, CA',
    education: 'U.C. Irvine',
    career: 'UX Engineer',
    skills: 'English Training, Web Development'
  },
  {
    image: 'https://semantic-ui.com/images/avatar/large/elliot.jpg',
    name: 'Elliot',
    location: 'Los Angeles, CA',
    education: 'U.C. Santa Barbara',
    career: 'Project Manager',
    skills: 'English Training, Web Development'
  },
  {
    image: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
    name: 'Matthew',
    location: 'Los Angeles, CA',
    education: 'U.C. Berkeley',
    career: 'Software Engineer',
    skills: 'English Training, Web Development'
  },
  {
    image: 'https://semantic-ui.com/images/avatar2/large/molly.png',
    name: 'Molly',
    location: 'Los Angeles, CA',
    education: 'U.C. San Diego',
    career: 'UI Engineer',
    skills: 'English Training, Web Development'
  },
  {
    image: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
    name: 'Jennifer',
    location: 'Los Angeles, CA',
    education: 'U.C. Irvine',
    career: 'UX Engineer',
    skills: 'English Training, Web Development'
  },
  {
    image: 'https://semantic-ui.com/images/avatar/large/elliot.jpg',
    name: 'Elliot',
    location: 'Los Angeles, CA',
    education: 'U.C. Santa Barbara',
    career: 'Project Manager',
    skills: 'English Training, Web Development'
  }
];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  align-items: center;
  justify-content: center;
`;

const MentorCard = styled.div`
  width: 250px;
  max-height: 350px;
  border-radius: 10px;
  border: 1px solid grey;
  padding: 1em;
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 1px solid grey;
  margin: 0.5em 0;
`;

const SubHeader = styled.div`
  color: grey;
  font-size: ${theme.fontSizes.sub};
`;

const Description = styled.div`
  color: black;
  font-size: ${theme.fontSizes.sm};
`;

const Image = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
`;

export class MentorCards extends React.Component {
  render() {
    return (
      <Container>
        {mentorsInfo.map(info => {
          return (
            <MentorCard>
              <Profile>
                <Image src={info.image} alt="test" />
                <Description>{info.name}</Description>
                <SubHeader>{info.location}</SubHeader>
              </Profile>

              <Divider />

              <Content>
                <SubHeader>Education</SubHeader>
                <Description>{info.education}</Description>
                <SubHeader>Career</SubHeader>
                <Description>{info.career}</Description>
                <SubHeader>Skills</SubHeader>
                <Description>{info.skills}</Description>
              </Content>
            </MentorCard>
          );
        })}
      </Container>
    );
  }
}

export default MentorCards;
