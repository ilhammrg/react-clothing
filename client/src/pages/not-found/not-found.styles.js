import styled from 'styled-components';
import { ReactComponent as NotFoundLogo } from './not-found.svg'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
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
  font-size: 18px;
  color: #858585;
  text-align: center;
  font-family: "Inter", sans-serif;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }  
`;