import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import { Container, EmptyContainer, EmptyTitle, EmptyText, ShopLink } from './cart-header.styles';
import CartItem from '../cart-item/cart-item.component';
import { EmptyCartImage } from '../empty-cart/empty-cart.styles';

const CartHeader = ({ cartItems }) => {
  return (
    <Container>
      {
        cartItems[0] ? 
          cartItems.map((item, index) => <CartItem key={index} item={item} />) 
        : 
          <EmptyContainer>
            <EmptyTitle>Cart is empty</EmptyTitle>
            <EmptyText>Go to <ShopLink to='/shop'>Shop</ShopLink> and start adding items to your cart</EmptyText>
            <EmptyCartImage />
          </EmptyContainer>
      }
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartHeader);