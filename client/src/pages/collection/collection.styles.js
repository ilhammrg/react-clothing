import styled from 'styled-components';

export const CollectionContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin-bottom: 100px;
`;

export const CollectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 30px;
  padding-left: 2.5rem;
  max-width: 1280px;
  width: 100%;
`;

export const CollectionItems = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 1280px;
  padding: 0 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
