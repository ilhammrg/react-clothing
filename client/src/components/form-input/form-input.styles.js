import styled, { css } from 'styled-components';

const color = {
  subColor: '#808080',
  mainColor: '#000000',
};

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${color.mainColor};
`;

export const FormInputGroup = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputElement = styled.input`
  background: none;
  background-color: white;
  color: $sub-color;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #ddd;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ .form-input-label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: ${color.subColor};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;
