import React from 'react';
import { Menu, Button, Dropdown } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import logo from '../../images/ISMP_logo.png';

import LanguageList from '../../components/LanguageList/LanguageList';

const navLinks = [
  {
    text: 'About Us',
    i18n_key: 'about_us',
    link: '/about'
  },
  { text: 'Program', i18n_key: 'program', link: '/program' },
  { text: 'Mentors', i18n_key: 'mentors', link: '/mentors' },
  { text: 'Stories', i18n_key: 'stories', link: '/stories' },
  { text: 'Blog', i18n_key: 'blog', link: '/blog' }
  // { text: 'Mentors', link: '/mentors', mobileOnly: true },
  // { text: 'Contact Us', link: '/contact' }
];

const Nav = ({ mobile, history }) => {
  const { t } = useTranslation('general');
  const currentPath = history.location.pathname;

  return (
    <>
      <Menu.Item as={Link} name="home" position="left" to="/">
        <img src={logo} alt="ISMP" style={{ width: '2.5em' }} />
      </Menu.Item>
      <Menu.Menu position="right">
        {navLinks.map((nav, index) => {
          return (
            <Menu.Item
              key={nav.text + index}
              as={Link}
              name={nav.text}
              to={nav.link}
              style={{ alignSelf: 'center' }}
              active={currentPath === nav.link}
            >
              {t(nav.i18n_key)}
            </Menu.Item>
          );
        })}
        <Menu.Item
          key="language-list"
          name="language-list"
          style={{ alignSelf: 'center' }}
        >
          <Dropdown.Menu>
            <LanguageList />
          </Dropdown.Menu>
        </Menu.Item>
        {mobile ? null : (
          <Menu.Item
            key="application-form"
            as={Link}
            name="application-form"
            to="/application-form"
            style={{ alignSelf: 'center' }}
          >
            <Button primary size="medium">
              {t('apply_now')}
            </Button>
          </Menu.Item>
        )}
      </Menu.Menu>
    </>
  );
};

export default withRouter(Nav);
