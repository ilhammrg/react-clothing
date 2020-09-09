import { takeLatest, all, put, call } from 'redux-saga/effects';

import { emptyCart } from './cart.actions';
import userActionTypes from '../user/user.types';

function* emptyCartOnSignOutSuccess() {
  yield put(emptyCart());
}

function* onUserSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, emptyCartOnSignOutSuccess);
}

export function* cartSagas() {
  yield all([
    call(onUserSignOutSuccess)
  ]);
}
