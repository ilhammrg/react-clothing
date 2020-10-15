import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as CartEmptyImage } from './cart-empty.svg'

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;

export const EmptyCartImage = styled(CartEmptyImage)`
  height: 250px;
  width: 250px;
`;

export const EmptyCartText = styled.span`
  font-size: 1.2rem;
  font-family: 'Inter', sans-serif;
  text-align: center;
  color: #858585;
`;

export const ShopLink = styled(Link)`
  color: #4285f4;
  font-weight: 600;
`;
