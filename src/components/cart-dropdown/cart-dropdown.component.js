import React from 'react';

import './cart-dropdown.style.scss';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            <CustomButton title="Checkout Now">Checkout</CustomButton>
        </div>
    );
}

export default CartDropdown;