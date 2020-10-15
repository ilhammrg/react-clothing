import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectError } from '../../redux/user/user.selectors';
import { selectDisplayPopUp } from '../../redux/pop-up/pop-up.selectors';

import { SignUpPageContainer } from './sign-up-page.styles';
import SignUp from '../../components/sign-up/sign-up.component';
import WelcomeLogo from '../../components/welcome-logo/welcome-logo.component';
import PopUp from '../../components/pop-up/pop-up.component';

const SignUpPage = ({ error, displayPopUp }) => {
  return (
    <SignUpPageContainer>
      <WelcomeLogo />
      <SignUp />
      {
        displayPopUp ? <PopUp message={error.message} /> : null
      }
    </SignUpPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  error: selectError,
  displayPopUp: selectDisplayPopUp,
});

export default connect(mapStateToProps)(SignUpPage);
