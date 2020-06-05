import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import SocialIconsList from '../../components/SocialIconsList/SocialIconsList';
import LanguageList from '../../components/LanguageList/LanguageList';

import {
  StyledLogo,
  HeaderContainer,
  LogoContainer,
  SecondaryContainer,
  NavContainer,
  NavLink,
  MainContainer
} from './Header.styles';

const navLinks = [
  { text: 'About', link: '/about' },
  { text: 'Mentors', link: '/mentors' },
  { text: 'Program', link: '/program' },
  { text: 'Stories', link: '/stories' },
  { text: 'Blog', link: '/blog' },
  { text: 'Contact Us', link: '/contact' }
];

const EntireHeader = () => {
  return (
    <HeaderContainer>
      <MainContainer>
        <LogoContainer>
          <a href="/" alt="ISMP Homepage">
            <StyledLogo
              src="https://images.squarespace-cdn.com/content/5d4ce82e08242000010863a1/1565369511729-35OZQEJ1HWHM1I4C08CV/ISMP_logo_white.png?format=1500w&content-type=image%2Fpng"
              alt="ISMP"
            />
          </a>
        </LogoContainer>
        <div>
          <SecondaryContainer>
            <LanguageList />
            <SocialIconsList isHeader />
          </SecondaryContainer>
          <NavContainer>
            {navLinks.map((nav, index) => (
              <Link key={nav.text + index} to={nav.link}>
                <NavLink>{nav.text}</NavLink>
              </Link>
            ))}
            <Link key="application-form" to="/application-form">
              <Button primary size="big" content="Apply Now" />
            </Link>
          </NavContainer>
        </div>
      </MainContainer>
    </HeaderContainer>
  );
};

export default EntireHeader;
