import React from 'react';

// Firebase
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

// Component
import './sign-up.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("Password don't match!");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch(error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-up'>
                <div className='sign-up-header'>
                    <span className='title'>I do not have an account</span>
                    <span className='subtitle'>Sign up with email</span>
                </div>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName' 
                        type='text' 
                        label='Name' 
                        value={this.state.displayName} 
                        handleChange={this.handleChange} 
                        required
                    />
                    <FormInput 
                        name='email' 
                        type='email' 
                        label='Email' 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='Password' 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        required
                    />
                    <FormInput 
                        name='confirmPassword' 
                        type='password' 
                        label='Confirm Password' 
                        value={this.state.confirmPassword} 
                        handleChange={this.handleChange} 
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>

            </div>
        )
    }
}

export default SignUp;