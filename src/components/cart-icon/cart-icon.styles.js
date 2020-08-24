import styled from 'styled-components';

export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .shopping-icon {
        width: 24px;
        height: 24px;
    }
`;

export const CartItemCount = styled.span`
    position: absolute;
    font-size: 10px;
    bottom: 10px;
`;