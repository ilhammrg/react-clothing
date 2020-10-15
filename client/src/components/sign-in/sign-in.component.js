import React, { useState } from 'react';

import { connect } from 'react-redux';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  Title,
  Form,
  ButtonContainer,
  SignInFooter,
  SignUpLink,
} from './sign-in.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


const SignIn = ({ signInWithEmail, signInWithGoogle }) => {
  const [userCredentials, updateUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    signInWithEmail({ email, password });
  };

  const handleChange = event => {
    const { value, name } = event.target;
    updateUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <Title>Sign In</Title>
      <Form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <ButtonContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </ButtonContainer>
      </Form>
      <SignInFooter>Don't have an account?</SignInFooter>
      <SignUpLink to="/signup">SIGN UP NOW</SignUpLink>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signInWithGoogle: () => dispatch(googleSignInStart()),
    signInWithEmail: emailAndPassword =>
      dispatch(emailSignInStart(emailAndPassword)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
