import styled, { css } from 'styled-components';

const standardButtonStyles = css`
    background-color: rgb(124, 79, 46);

    &:hover {
        background-color: rgb(168, 115, 77);
    }
`;

const googleButtonStyles = css`
    background-color: #4285f4;

    &:hover {
        background-color: #6aa1fa;
        border: none;
    }
`;

const getButtonStyles = (props) => {
    if (props.isGoogleSignIn) {
        return googleButtonStyles;
    };

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
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: bolder;
    color: white;
    border-radius: 4px;
    border: none;
    outline: none;
    transition: 0.2s;
    cursor: pointer;

    ${getButtonStyles}
`;