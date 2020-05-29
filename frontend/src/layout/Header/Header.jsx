import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import SocialIconsList from '../../components/SocialIconsList/SocialIconsList';
import LanguageList from '../../components/LanguageList/LanguageList';
import logo from '../../images/ISMP_logo_white.png';

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
  {
    text: 'About',
    link: '/about'
  },
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
            <StyledLogo src={logo} alt="ISMP" />
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
            <Button primary size="big" content="Apply Now" />
          </NavContainer>
        </div>
      </MainContainer>
    </HeaderContainer>
  );
};

export default EntireHeader;
