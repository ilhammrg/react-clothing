import React from 'react';

import SignUp from '../../components/sign-up/sign-up.component';
import WelcomeLogo from '../../components/welcome-logo/welcome-logo.component';
import { SignUpPageContainer } from './sign-up-page.styles';

const SignUpPage = () => {
  return (
    <SignUpPageContainer>
      <WelcomeLogo />
      <SignUp />
    </SignUpPageContainer>
  );
};

export default SignUpPage;