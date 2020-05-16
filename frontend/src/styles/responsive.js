import React from 'react';
import MediaQuery from 'react-responsive';

const breakpoints = {
  desktop: '(min-width: 1025px)',
  tablet: '(min-width: 768px) and (max-width: 1024px)',
  mobile: '(max-width: 767px)'
};

export const Desktop = props => (
  <MediaQuery query={breakpoints.desktop}>{props.children}</MediaQuery>
);
export const Tablet = props => (
  <MediaQuery query={breakpoints.tablet}>{props.children}</MediaQuery>
);
export const Mobile = props => (
  <MediaQuery query={breakpoints.mobile}>{props.children}</MediaQuery>
);
