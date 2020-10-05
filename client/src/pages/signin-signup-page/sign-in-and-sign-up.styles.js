import styled from 'styled-components';

export const SignInSignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 100px auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    width: 95%;
    max-width: 800px;
    grid-gap: 20px;
  }
`;