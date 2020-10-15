import popUpActionTypes from './pop-up.types';

export const togglePopUp = () => {
  return {
    type: popUpActionTypes.TOGGLE_POP_UP,
  };
};
