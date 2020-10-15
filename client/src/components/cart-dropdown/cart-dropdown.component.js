import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

// Redux
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// Components
import {
  CartDropdownContainer,
  CartDropdownItems,
} from './cart-dropdown.styles';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartDropdownItems>
        {cartItems.length ? (
          cartItems.map(item => {
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </CartDropdownItems>
      <CustomButton
        title="Checkout Now"
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        Checkout
      </CustomButton>
    </CartDropdownContainer>
  );
};

const mapStatetoProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStatetoProps)(CartDropdown));
