import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  display: none;

  @media screen and (min-width: 768px) {
    height: 100%;
    width: 100%;
    box-shadow: 0 1px 20px rgba(200, 200, 200, 0.5);
    grid-row: 4 / 5;
    grid-column: 2 / 4;
    display: flex;
    padding: 1rem;
    max-height: 230px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    & div {
      height: 100%;
      width: 150px;
      flex-direction: column;
      align-items: center;
      margin-right: 0.8rem;

      & img {
        width: 150px;
        height: 150px;
        object-fit: cover;
      }

      & div {
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    grid-row: 3 / 5;
  }
`;

export const EmptyContainer = styled.section`
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    height: 150px;
    margin-top: 0.8rem;
  }
`;

export const EmptyTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  text-align: center;
  font-size: 1rem;
`;

export const EmptyText = styled.span`
  font-family: 'Inter', sans-serif;
  text-align: center;
  font-size: 1rem;
`;

export const ShopLink = styled(Link)`
  color: #4285f4;
  font-weight: 600;
`;
