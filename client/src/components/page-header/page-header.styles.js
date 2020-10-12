import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as ShopLogo } from './shopping.svg';

export const PageHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0 15px 0;
  width: 95%;

  @media screen and (min-width: 768px) {
    padding: 0 20px;
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-gap: 5px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 300px 1fr;
    margin: 120px 0 30px 0;
    max-width: 1280px;
  }
`;

export const ShopImage = styled(ShopLogo)`
  width: 250px;
  height: 250px;

  @media screen and (min-width: 768px) {
    grid-column: 1;
    grid-row: 1 / 4;
  }

  @media screen and (min-width: 1280px) {
    width: 300px;
    height: 300px;
  }
`;

export const Title = styled.span`
  font-size: 2.5rem;
  font-family: 'Fredoka One', cursive;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: unset;
    grid-column: 2;
    grid-row: 1 / 2;
  }
`;

export const Description = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  margin-bottom: 30px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: unset;
    grid-column: 2;
    grid-row: 2 / 3;
  }
`;

export const SignInLink = styled(Link)`
  font-size: 1.1rem;
  font-family: 'Inter', sans-serif;
  color: #4285f4;
`;
