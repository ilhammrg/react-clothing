import React, { useState } from 'react';

import {
  SignupContainer,
  SignupHeader,
  Title,
  Subtitle,
  Form
} from './sign-up.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, updateUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password don't match!");
      return;
    }

    signUpStart({ email, password, displayName });
  }

  const handleChange = event => {
    const { value, name } = event.target;
    updateUserCredentials({ ...userCredentials, [name]: value });
  }

  return (
    <SignupContainer>
      <SignupHeader>
        <Title>I don't have an account</Title>
        <Subtitle>Sign up with Email</Subtitle>
      </SignupHeader>
      <Form onSubmit={handleSubmit}>
        <FormInput 
          name='displayName' 
          type='text' 
          label='Name' 
          value={displayName} 
          handleChange={handleChange} 
          required
        />
        <FormInput 
          name='email' 
          type='email' 
          label='Email' 
          value={email} 
          handleChange={handleChange} 
          required
        />
        <FormInput 
          name='password' 
          type='password' 
          label='Password' 
          value={password} 
          handleChange={handleChange} 
          required
        />
        <FormInput 
          name='confirmPassword' 
          type='password' 
          label='Confirm Password' 
          value={confirmPassword} 
          handleChange={handleChange} 
          required
        />
        <CustomButton type='submit'>Sign Up</CustomButton>
      </Form>
    </SignupContainer>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
  };
}

export default connect(null, mapDispatchToProps)(SignUp);