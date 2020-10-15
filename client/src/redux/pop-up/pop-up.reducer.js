import popUpActionTypes from './pop-up.types';

const INITIAL_STATE = {
  displayPopUp: false,
};

const popUpReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case popUpActionTypes.TOGGLE_POP_UP:
      return {
        ...state,
        displayPopUp: !state.displayPopUp,
      };
    default: 
      return state;
  }
};

export default popUpReducer;
