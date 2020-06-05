import Section from '../../layout/Section';
import React from 'react';
import Quote from '../../components/Quote/Quote';
import { Container } from 'semantic-ui-react';

const Stories = () => {
  return (
    <Container>
      <Section>
        <h2>Stories from Our Mentees</h2>
        {/* TODO - MAP IT */}
        <Quote
          author="Jesse"
          quote="Ceasing to be 'in love' need not mean ceasing to love. Love in this second sense - love as distinct from 'being in love' - is not merely a feeling. It is a deep unity, maintained by the will and deliberately strengthened by habit; reinforced by (in Christian marriages) the grace which both partners ask, and receive, from God. They can have this love for each other even at those moments when they do not like each other; as you love yourself even when you do not like yourself. They can retain this love even when each would easily, if they allowed themselves, be 'in love' with someone else. 'Being in love' first moved them to promise fidelity: this quieter love enables them to keep the promise."
        />
        <Quote
          author="Richard"
          quote="In religion, as in war and everything else, comfort is the one thing you cannot get by looking for it. If you look for truth, you may find comfort in the end: if you look for comfort you will not get either comfort or truth -- only soft soap and wishful thinking to begin with and, in the end, despair."
        />
        <Quote
          author="Jacob"
          quote="The only things we can keep are the things we freely give to God. What we try to keep for ourselves is just what we are sure to lose"
        />
        <Quote
          author="Ken"
          quote="The world does not consist of 100 percent Christians and 100 percent non-Christians. There are people (a great many of them) who are slowly ceasing to be Christians but who still call themselves by that name: some of them are clergymen. There are other people who are slowly becoming Christians though they do not yet call themselves so."
        />
      </Section>
      <Section>
        <h2>Recap of last year...</h2>
      </Section>
    </Container>
  );
};

export default Stories;
