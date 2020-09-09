import React from 'react';

import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        const { signInWithEmail } = this.props;

        signInWithEmail({ email, password });
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { signInWithGoogle } = this.props;
        const { email, password } = this.state;

        return(
        <div className='signin'>
            <div className='sign-in-header'>
                <span className='title'>I already have an account</span>
                <span className='subtitle'>Sign in with email and password</span>
            </div>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    label='Email' 
                    value={email} 
                    handleChange={this.handleChange} 
                    required />
                <FormInput 
                    name='password' 
                    type='password' 
                    label='Password' 
                    value={password} 
                    handleChange={this.handleChange} 
                    required />
                <div className='signin-buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
            </form>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signInWithGoogle: () => dispatch(googleSignInStart()),
        signInWithEmail: emailAndPassword => dispatch(emailSignInStart(emailAndPassword))
    };
}

export default connect(null, mapDispatchToProps)(SignIn);