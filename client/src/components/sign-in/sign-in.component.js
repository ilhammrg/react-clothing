import React, { useState } from 'react';

import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ signInWithEmail, signInWithGoogle }) => {
    const [userCredentials, updateUserCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        signInWithEmail({ email, password });
    }

    const handleChange = event => {
        const { value, name } = event.target;
        updateUserCredentials({ ...userCredentials,  [name]: value });
    }

    return(
    <div className='signin'>
        <div className='sign-in-header'>
            <span className='title'>I have an account</span>
            <span className='subtitle'>Sign in with Email or Google Account</span>
        </div>
        <form onSubmit={handleSubmit}>
            <FormInput 
                name='email' 
                type='email' 
                label='Email' 
                value={email} 
                handleChange={handleChange} 
                required />
            <FormInput 
                name='password' 
                type='password' 
                label='Password' 
                value={password} 
                handleChange={handleChange} 
                required />
            <div className='signin-buttons'>
                <CustomButton type='submit'>Sign In</CustomButton>
                <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
            </div>
        </form>
    </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        signInWithGoogle: () => dispatch(googleSignInStart()),
        signInWithEmail: emailAndPassword => dispatch(emailSignInStart(emailAndPassword))
    };
}

export default connect(null, mapDispatchToProps)(SignIn);