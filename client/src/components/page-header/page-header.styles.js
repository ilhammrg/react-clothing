import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as ShopLogo } from './shopping.svg';

export const PageHeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0 15px 0;
  width: 95%;

  button {
    grid-column: 2;
    grid-row: 3 / 4;
  }

  @media screen and (min-width: 768px) {
    padding: 0 0.6rem;
    display: grid;
    grid-template-columns: 250px 1fr 1fr;
    grid-gap: 5px;

    button {
      margin-bottom: 1rem;
    }
  }

  @media screen and (min-width: 1024px) {
    button {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
      max-width: 200px;
      margin-left: auto;
    }
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 300px 1fr 1fr;
    margin: 120px 0 30px 0;
    max-width: 1280px;
  }
`;

export const ShopImage = styled(ShopLogo)`
  width: 250px;
  height: 250px;

  @media screen and (min-width: 768px) {
    grid-column: 1;
    grid-row: 1 / 5;
  }

  @media screen and (min-width: 1280px) {
    width: 300px;
    height: 300px;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-family: 'Fredoka One', cursive;
  text-align: center;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    text-align: unset;
    grid-column: 2 / 4;
    grid-row: 1 / 2;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  margin-bottom: 2rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: unset;
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 1024px) {
    grid-column: 2 / 3;
  }
`;

export const SignInLink = styled(Link)`
  font-size: 1.1rem;
  font-family: 'Inter', sans-serif;
  color: #4285f4;
  font-weight: 600;
`;
