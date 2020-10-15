import styled, { css } from 'styled-components';

const standardButtonStyles = css`
  background-color: #000;
  border: 2px solid #000;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const googleButtonStyles = css`
  background-color: #4285f4;
  border: 2px solid #4285f4;

  &:hover {
    color: #000;
    background-color: #fff;
    border: 2px solid #000;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleButtonStyles;
  }

  return standardButtonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bolder;
  color: white;
  border: none;
  outline: none;
  transition: 0.2s;
  cursor: pointer;

  ${getButtonStyles}
`;
