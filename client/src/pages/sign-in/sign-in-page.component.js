import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectError } from '../../redux/user/user.selectors';
import { selectDisplayPopUp } from '../../redux/pop-up/pop-up.selectors';

import { SignInPageContainer } from './sign-in-page.styles';
import SignIn from '../../components/sign-in/sign-in.component';
import WelcomeLogo from '../../components/welcome-logo/welcome-logo.component';
import PopUp from '../../components/pop-up/pop-up.component';

const SignInPage = ({ error, displayPopUp }) => {
  return (
    <SignInPageContainer>
      <WelcomeLogo />
      <SignIn />
      {
        displayPopUp ? <PopUp message={error.message} /> : null
      }
    </SignInPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  error: selectError,
  displayPopUp: selectDisplayPopUp,
});

export default connect(mapStateToProps)(SignInPage);
