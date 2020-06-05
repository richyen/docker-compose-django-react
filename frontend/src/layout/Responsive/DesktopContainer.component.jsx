import React, { useState } from 'react';
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from 'semantic-ui-react';

import Nav from '../Nav/Nav.component';
import Footer from '../Footer/Footer';

import { getWidth } from './responsiveUtils';

const DesktopContainer = ({ children }) => {
  const [fixed, setFixed] = useState(null);

  const hideFixedMenu = () => {
    setFixed(false);
  };

  const showFixedMenu = () => {
    setFixed(true);
  };

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment inverted textAlign="center" style={{ padding: '0' }} vertical>
          <Menu
            borderless
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Nav />
            </Container>
          </Menu>
        </Segment>
      </Visibility>

      {children}

      <Footer />
    </Responsive>
  );
};

export default DesktopContainer;
