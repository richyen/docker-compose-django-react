import Section from '../../layout/Section';
import React from 'react';
import CollegeCardList from '../../components/CollegeCard/CollegeCardList';
import { Container } from 'semantic-ui-react';

const About = () => {
  return (
    <Container>
      <Section>
        <h2>About Us</h2>
        International Student Mentorship Program (ISMP) is sponsored by
        international Christian student groups on campuses throughout
        California, Texas, and Minnesota. Our student groups seek to provide a
        home away from home where international students can have fun, make
        friends, and also learn about God together. Our mentors range from
        working professionals and college graduates of top tier universities to
        PhD and Master’s candidates.
      </Section>
      <Section>
        <CollegeCardList />
      </Section>
    </Container>
  );
};

export default About;
