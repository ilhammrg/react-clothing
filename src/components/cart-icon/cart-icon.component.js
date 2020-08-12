import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

// Selector redux
import { selectItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

// Components
import './cart-icon.style.scss';
import { ReactComponent as ShoppingCartLogo } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className="cart-icon" title="Open Cart" onClick={toggleCartHidden}>
            <ShoppingCartLogo className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
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