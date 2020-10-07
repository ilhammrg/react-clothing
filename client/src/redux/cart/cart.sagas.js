import { takeLatest, all, put, call, select } from 'redux-saga/effects';

import { emptyCart, setCartFromFirebase } from './cart.actions';
import cartActionTypes from './cart.types';
import { selectCartItems } from './cart.selectors';
import userActionTypes from '../user/user.types';
import { selectCurrentUser } from '../user/user.selectors';

import { getUserCartRef } from '../../firebase/firebase.utils';

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* onUserSignIn() {
  yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onCartChange() {
  yield takeLatest(
    [
      cartActionTypes.ADD_ITEM,
      cartActionTypes.REMOVE_ITEM,
      cartActionTypes.CLEAR_ITEM_FROM_CART
    ],
    updateCartInFirebase
  );
}

function* emptyCartOnSignOutSuccess() {
  yield put(emptyCart());
}

function* onUserSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, emptyCartOnSignOutSuccess);
}

export function* cartSagas() {
  yield all([
    call(onUserSignOutSuccess),
    call(onCartChange),
    call(onUserSignIn)
  ]);
}
