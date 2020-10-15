import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CollectionPreviewContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
  max-width: 1280px;
  padding: 0 1rem;
`;

export const CollectionPreviewTitle = styled(Link)`
  font-size: 1.5rem;
  display: inline-block;
  width: fit-content;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background-color: #efefef;
  }
`;

export const CollectionPreviewItems = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    grid-gap: 15px;
  }

  @media screen and (min-width: 1800px) {
    grid-gap: 20px;
  }
`;
