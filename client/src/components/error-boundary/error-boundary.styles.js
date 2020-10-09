import styled from 'styled-components';
import { ReactComponent as OfflineImage } from './notify.svg';

export const ErrorImageOverlay = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const ErrorImage = styled(OfflineImage)`
  width: 250px;
  height: 250px;

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 350px;
  }
`;

export const ErrorTitle = styled.span`
  font-weight: 400;
  font-size: 40px;
  color: #666;
  text-align: center;
`;

export const ErrorImageText = styled.span`
  font-size: 18px;
  color: #858585;
  text-align: center;
  font-family: "Inter", sans-serif;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
