import React from 'react';
import {
  FormInputGroup,
  FormInputElement,
  FormInputLabel,
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <FormInputGroup>
      <FormInputElement onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel
          className={`${otherProps.value.length ? 'shrink' : ''}`}
        >
          {label}
        </FormInputLabel>
      ) : null}
    </FormInputGroup>
  );
};

export default FormInput;
