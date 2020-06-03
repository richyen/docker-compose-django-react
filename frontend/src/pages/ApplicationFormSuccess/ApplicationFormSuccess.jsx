import Section from '../../layout/Section';
import React from 'react';
import { Button } from 'semantic-ui-react';

const Home = () => {
  return (
    <div>
      <Section>
        <h3>
          {/* TODO: this page looks bad, just needed to test redirect */}
          Your application has been received!
        </h3>
        <p>
          You will receive a confirmation email shortly with more details and
          next steps. Look forward to meeting you!
        </p>
        <Button.Group>
          <Button>See Programs</Button>
          <Button>View Blog</Button>
        </Button.Group>
      </Section>
    </div>
  );
};

export default Home;
