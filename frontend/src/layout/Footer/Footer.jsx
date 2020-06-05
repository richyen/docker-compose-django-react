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
    links: [
      { text: '(858) 123-4567', link: 'tel: (858)123-4567' },
      { text: '123 Main St. San Diego, CA 92122', link: '/' }
    ],
    width: 4
  },
  {
    section: 'About Us',
    links: [
      { text: 'Our History', link: '/about' },
      { text: 'Mission + Values', link: '/about' },
      { text: 'Our Program', link: '/program' },
      { text: 'Mentors', link: '/mentors' },
      { text: 'Testimonials', link: '/stories' },
      { text: 'Contact Us', link: '/contact' }
    ],
    width: 3
  },
  {
    section: 'Blog',
    links: [
      { text: 'Webinar', link: '/blog' },
      { text: 'Podcast', link: '/blog' },
      { text: 'Videos', link: '/blog' }
    ],
    width: 3
  },
  {
    section: 'Program',
    links: [
      { text: 'Link', link: '/' },
      { text: 'Link', link: '/' },
      { text: 'Link', link: '/' }
    ],
    width: 3
  }
];

const privacyLinks = [
  { text: 'Privacy', link: '/' },
  { text: 'Terms', link: '/' },
  { text: 'Sitemap', link: '/' },
  { text: 'Cookies Policy', link: '/' }
];

const footerLinks = linkArr => {
  return linkArr.map((linkObj, index) => {
    return (
      <List.Item as="a" key={index} to={linkObj.link}>
        {linkObj.text}
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
        <Grid inverted stackable textAlign="left">
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
