import React from 'react';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

// Firebase
import { auth } from '../../firebase/firebase.utils';

// Components
import { HeaderContainer, LogoContainer, BrandLogo, BrandName, OptionContainer, OptionLink, OptionDiv } from './header.styles';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <BrandLogo></BrandLogo>
                <BrandName>TRIANGLE CLOTHING</BrandName>
            </LogoContainer>
            <OptionContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {
                    currentUser ?
                    <OptionDiv onClick={()=> auth.signOut()}>SIGN OUT</OptionDiv>
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

export default connect(mapStatetoProps)(Header);