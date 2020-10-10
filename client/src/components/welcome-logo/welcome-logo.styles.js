import styled from 'styled-components';

import { ReactComponent as Welcome } from './welcome.svg';

export const WelcomeContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const WelcomeText = styled.span`
  font-family: 'Fredoka One',cursive;
  font-size: 2.5rem;
  color: #4285f4;
`;

export const WelcomeImage = styled(Welcome)`
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (min-width: 1024px) {
    width: 450px;
    height: 450px;
  }
`;