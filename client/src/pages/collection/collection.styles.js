import styled from 'styled-components';

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 8px;

  @media screen and (min-width: 768px) {
    margin: 100px 40px;
  }
`;

export const CollectionTitle = styled.span`
  font-size: 18px;
  margin-bottom: 30px;
  margin-left: 8px;
`;

export const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;