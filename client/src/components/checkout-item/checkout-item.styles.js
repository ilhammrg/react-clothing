import styled, { css } from 'styled-components';

const indicatorStyles = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .name {
    ${indicatorStyles}
  }

  .price {
    color: red;
    padding: 0 3%;
    ${indicatorStyles}
  }

  @media screen and (min-width: 768px) {
    .price {
      padding: 0 7%;
    }
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
  padding: 0 1%;
  ${indicatorStyles}

  .arrow {
    cursor: pointer;
    font-weight: 700;
    transition: 0.3s;
    padding: 0 8px;
    border-radius: 100%;
    background-color: #efefef;
    color: #585858;

    &:hover {
      color: #131313;
    }
  }

  .value {
    margin: 0 8px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 4%;
  }
`;

export const CheckoutRemoveButton = styled.div`
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #666;
  }

  @media screen and (min-width: 768px) {
    padding: 1rem;
    margin-left: 5%;
  }
`;