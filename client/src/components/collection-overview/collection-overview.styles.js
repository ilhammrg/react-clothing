import styled from 'styled-components';

export const CollectionOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 8px;

  @media screen and (min-width: 768px) {
    margin: 80px 40px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    margin: 80px auto;
  }
`;