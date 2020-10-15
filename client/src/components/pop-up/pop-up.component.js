import React from 'react';

import { connect } from 'react-redux';
import { togglePopUp } from '../../redux/pop-up/pop-up.actions';

import { PopUpOverlay, PopUpContainer, PopUpText } from './pop-up.styles';
import CustomButton from '../custom-button/custom-button.component';

const PopUp = ({ message, togglePopUp }) => {
  return (
    <PopUpOverlay>
      <PopUpContainer>
        <PopUpText>{message ? message : 'Error message'}</PopUpText>
        <CustomButton onClick={togglePopUp}>Close</CustomButton>
      </PopUpContainer>
    </PopUpOverlay>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePopUp: () => dispatch(togglePopUp()),
  };
};

export default connect(null, mapDispatchToProps)(PopUp);
