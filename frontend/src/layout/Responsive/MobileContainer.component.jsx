import React, { Component } from 'react';
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav.component';
import Footer from '../Footer/Footer';
import { getWidth } from './responsiveUtils';

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
          borderless
        >
          <Nav mobile={true} />
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ padding: '1em 0em' }}
            vertical
          >
            <Container>
              {/* Hamburger button */}
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item
                  key="application-form"
                  as={Link}
                  name="application-form"
                  to="/application-form"
                  style={{ alignSelf: 'center' }}
                  position="right"
                >
                  <Button primary size="medium" content="Apply Now" />
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {children}
          <Footer />
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

export default MobileContainer;
