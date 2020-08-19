import styled, { css } from 'styled-components';

const indicatorStyles = css`
    width: 23%;
`;

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    .name, .price {
      ${indicatorStyles}
    }
`;

export const CheckoutItemImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 70%;
        height: 70%;
    }
`;

export const CheckoutItemQuantityContainer = styled.span`
    display: flex;
    padding-left: 3px;
    ${indicatorStyles}

    .arrow {
        cursor: pointer;
        font-weight: 700;
        transition: 0.3s;

        &:hover {
            color: #666;
        }
    }

    .value {
        margin: 0 8px;
    }
`;

export const CheckoutRemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: #666;
    }
`;