import React from 'react';

import { WelcomeImage, WelcomeContainer, WelcomeText } from './welcome-logo.styles';

const WelcomeLogo = () => {
  return (
    <WelcomeContainer>
      <WelcomeText>Welcome!</WelcomeText>
      <WelcomeImage />
    </WelcomeContainer>
  );
};

export default WelcomeLogo;