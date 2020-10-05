import React from 'react';

import { EmptyCartContainer, EmptyCartImage, EmptyCartText } from './empty-cart.styles';

const EmptyCart = () => {
  return (
    <EmptyCartContainer>
      <EmptyCartImage />
      <EmptyCartText>Your cart is empty</EmptyCartText>
    </EmptyCartContainer>
  );
}

export default EmptyCart;