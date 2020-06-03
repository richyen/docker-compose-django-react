import React from 'react';
import {
  Button,
  Container,
  Grid,
  Header,
  List,
  Segment
} from 'semantic-ui-react';

import SocialMediaIconList from '../../components/SocialIconsList';

const style = {
  footerContainer: {
    margin: '0',
    padding: '3em 0em'
  }
};

const footerContent = [
  {
    section: 'Contact Us',
    links: ['(000) 000 - 000', 'Address 1', 'Address 2'],
    width: 3
  },

  { section: 'About', links: ['Our History', 'Mission + Values'], width: 3 },

  { section: 'Mentors', links: [], width: 2 },

  { section: 'Blog', links: ['Webinar', 'Podcast', 'Link'], width: 2 },

  { section: 'Program', links: ['Link', 'Link', 'Link'], width: 2 }
];

const privacyLinks = ['Privacy', 'Terms', 'Sitemap', 'Cookies Policy'];

const footerLinks = linkArr => {
  return linkArr.map((footerLink, index) => {
    return (
      <List.Item as="a" key={index}>
        {footerLink}
      </List.Item>
    );
  });
};

const links = contentArr => {
  return contentArr.map((content, index) => {
    return (
      <Grid.Column width={content.width} key={index}>
        <Header inverted as="h4" content={content.section} />
        <List link inverted>
          {footerLinks(content.links)}
        </List>
      </Grid.Column>
    );
  });
};

const Footer = () => {
  return (
    <Segment inverted vertical style={style.footerContainer}>
      <Container>
        <Grid
          inverted
          stackable
          textAlign="left"
          // style={{ paddingLeft: '10%' }}
        >
          <Grid.Row>
            {links(footerContent)}
            <Grid.Column width={3}>
              <Button size="tiny" as="a" inverted={false}>
                Apply Now
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column floated="left" width={4}>
              <SocialMediaIconList />
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <List horizontal inverted divided link size="small">
                {footerLinks(privacyLinks)}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
