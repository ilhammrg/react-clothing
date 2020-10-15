import React from 'react';

import { EmptyCartContainer, EmptyCartImage, EmptyCartText, ShopLink } from './empty-cart.styles';

const EmptyCart = () => {
  return (
    <EmptyCartContainer>
      <EmptyCartImage />
      <EmptyCartText>Cart is empty</EmptyCartText>
      <EmptyCartText>Go to <ShopLink to='/shop'>Shop</ShopLink> and start adding items to your cart</EmptyCartText>
    </EmptyCartContainer>
  );
}

export default EmptyCart;