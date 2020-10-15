import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectItemsCount = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accu, cartItem) => accu + cartItem.quantity,
    0 /* initial value */
  )
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accu, cartItem) => accu + cartItem.price * cartItem.quantity,
    0 /* Initial total price value */
  )
);
