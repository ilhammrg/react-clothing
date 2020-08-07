import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.action';

// Components
import './cart-icon.style.scss';
import { ReactComponent as ShoppingCartLogo } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden }) => {
    return (
        <div className="cart-icon" title="Open Cart" onClick={toggleCartHidden}>
            <ShoppingCartLogo className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    };
};

export default connect(null, mapDispatchToProps)(CartIcon);