import React from 'react';

import { connect } from 'react-redux';
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

import { CheckoutItemContainer, CheckoutItemImageContainer, CheckoutItemQuantityContainer, CheckoutRemoveButton } from './checkout-item.styles';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
    const { name, imageUrl, quantity, price} = cartItem;
    return (
        <CheckoutItemContainer>
            <CheckoutItemImageContainer>
                <img src={imageUrl} alt='item' />
            </CheckoutItemImageContainer>
            <span className='name'>{name}</span>
            <CheckoutItemQuantityContainer>
                <div className='arrow' onClick={() => removeItem(cartItem)}>-</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>+</div>
            </CheckoutItemQuantityContainer>
            <span className='price'>${price * quantity}</span>
            <CheckoutRemoveButton>
                <span title={`Remove ${name}`} onClick={() => clearItem(cartItem)}>&#10005;</span>
            </CheckoutRemoveButton>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item)),
        removeItem: item => dispatch(removeItem(item)),
        clearItem: item => dispatch(clearItemFromCart(item))
    };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);