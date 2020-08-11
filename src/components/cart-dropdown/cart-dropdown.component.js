import React from 'react';

import { connect } from 'react-redux';

// Components
import './cart-dropdown.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(item => {
                        return <CartItem key={item.id} item={item} />
                    })
                }
            </div>
            <CustomButton title="Checkout Now">Checkout</CustomButton>
        </div>
    );
};

const mapStatetoProps = state => {
    return {
        cartItems: state.cart.cartItems
    };
};

export default connect(mapStatetoProps)(CartDropdown);