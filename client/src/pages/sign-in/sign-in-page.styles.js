import styled from 'styled-components';

export const SignInPageContainer = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  grid-gap: unset;

  @media screen and (min-width: 768px) {
    width: unset;
    grid-gap: 70px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;
