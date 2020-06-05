import React from 'react';
import DesktopContainer from './DesktopContainer.component';
import MobileContainer from './MobileContainer.component';

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

export default ResponsiveContainer;
