import React from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Firebase
import { auth } from '../../firebase/firebase.utils';

// Components
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.style.scss';


const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'></Logo>
            </Link>
            <div className='option-container'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/contact' className='option'>CONTACT</Link>
                {
                    currentUser ?
                    <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        currentUser: state.user.currentUser
    };
}


export default connect(mapStatetoProps)(Header);