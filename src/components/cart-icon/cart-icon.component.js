import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

// Selector redux
import { selectItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

// Components
import { CartIconContainer, CartItemCount } from './cart-icon.styles';
import { ReactComponent as ShoppingCartLogo } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <CartIconContainer title="Open Cart" onClick={toggleCartHidden}>
            <ShoppingCartLogo className="shopping-icon"/>
            <CartItemCount className="item-count">{itemCount}</CartItemCount>
        </CartIconContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    itemCount: selectItemsCount
});

const mapDispatchToProps = dispatch => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);