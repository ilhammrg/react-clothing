import { createSelector } from 'reselect';

const selectPopUp = (state) => state.popUp;

export const selectDisplayPopUp = createSelector(
  [selectPopUp],
  (popUp) => popUp.displayPopUp,
);
