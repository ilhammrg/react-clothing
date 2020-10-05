import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import { 
  CheckoutPageContainer, 
  CheckoutHeader, 
  CheckoutHeaderBlock, 
  CheckoutTotal, 
  CheckoutTestWarning
} from './checkout.styles';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';
import EmptyCart from '../../components/empty-cart/empty-cart.component';

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <CheckoutPageContainer>
      <h2 className='title'>CHECKOUT</h2>
      <CheckoutHeader>
        <CheckoutHeaderBlock>
          <span>Product</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Description</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Quantity</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Price</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Remove</span>
        </CheckoutHeaderBlock>
      </CheckoutHeader>
      {
        cartItems.length === 0
        ? <EmptyCart />
        : cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
      }
      <CheckoutTotal>
        <span>Total: <span className='price-total'>${total}</span></span>
      </CheckoutTotal>
      <CheckoutTestWarning>
        *USE THIS CREDIT CARD INFORMATION FOR TESTING*
        <br/>
        Card Number: 4242 4242 4242 4242 | Exp: 01/23 | CVV: 123
      </CheckoutTestWarning>
      <StripeButton price={total} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);