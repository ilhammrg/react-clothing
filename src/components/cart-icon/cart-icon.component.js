import React from 'react';

import './cart-icon.style.scss';
import { ReactComponent as ShoppingCartLogo } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
    return (
        <div className="cart-icon" title="Open Cart">
            <ShoppingCartLogo className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    );
}

export default CartIcon;