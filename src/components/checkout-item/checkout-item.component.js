import React from 'react';

import { connect } from 'react-redux';
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
    const { name, imageUrl, quantity, price} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>-</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>+</div>
            </span>
            <span className='price'>${price * quantity}</span>
            <div className='remove-button'>
                <span title={`Remove ${name}`} onClick={() => clearItem(cartItem)}>&#10005;</span>
            </div>
        </div>
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