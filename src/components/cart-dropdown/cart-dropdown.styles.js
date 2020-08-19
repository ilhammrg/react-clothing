import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 5px;
    background-color: white;
    top: 50px;
    right: 40px;
    z-index: 5;

    button {
        margin-top: auto;
    }
`;

export const CartDropdownItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;

    .empty-message {
        margin: auto;
    }
`;

