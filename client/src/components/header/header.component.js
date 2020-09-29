import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { HeaderContainer, LogoContainer, BrandLogo, BrandName, OptionContainer, OptionLink } from './header.styles';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


const Header = ({ currentUser, hidden, signOutStart }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <BrandLogo></BrandLogo>
                <BrandName>REACT CLOTHING</BrandName>
            </LogoContainer>
            <OptionContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {
                    currentUser ?
                    <OptionLink as='div' type='button' onClick={signOutStart}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionContainer>
            {
                hidden ? null : <CartDropdown />
            }
        </HeaderContainer>
    )
}

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => {
    return {
        signOutStart: () => dispatch(signOutStart())
    };
}

export default connect(mapStatetoProps, mapDispatchToProps)(Header);