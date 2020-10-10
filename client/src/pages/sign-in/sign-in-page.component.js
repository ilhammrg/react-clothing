import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import WelcomeLogo from '../../components/welcome-logo/welcome-logo.component';
import { SignInPageContainer } from './sign-in-page.styles';

const SignInPage = () => {
  return (
    <SignInPageContainer>
      <WelcomeLogo />
      <SignIn />
    </SignInPageContainer>
  );
}

export default SignInPage;