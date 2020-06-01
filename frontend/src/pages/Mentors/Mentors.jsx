import Section from '../../layout/Section';
import React from 'react';
import MentorCards from '../../components/MentorCards/MentorCards';

const Mentors = () => {
  return (
    <div>
      <Section>
        <h2>Our Mentors</h2>
        <h3>We have a high bar for our mentors. </h3>
      </Section>
      <MentorCards />
    </div>
  );
};

export default Mentors;
