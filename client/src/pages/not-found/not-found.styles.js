import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as NotFoundLogo } from './not-found.svg';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  min-height: 100vh;
`;

export const NotFoundImage = styled(NotFoundLogo)`
  width: 250px;
  height: 250px;

  @media screen and (min-width: 768px) {
    width: 450px;
    height: 450px;
  }
`;

export const NotFoundTitle = styled.span`
  font-weight: 400;
  font-size: 40px;
  color: #666;
`;

export const NotFoundText = styled.span`
  font-weight: 400;
  font-size: 1.1rem;
  color: #858585;
  text-align: center;
  font-family: 'Inter', sans-serif;
`;

export const HomeLink = styled(Link)`
  font-size: 1.1rem;
  font-family: 'Inter', sans-serif;
  color: #4285f4;
  font-weight: 600;
`;