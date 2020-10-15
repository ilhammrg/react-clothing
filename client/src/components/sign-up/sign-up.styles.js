import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignupContainer = styled.section`
  background-color: #fff;
  width: 90%;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
`;

export const Title = styled.h2`
  margin: auto;
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Fredoka One', cursive;
`;

export const Subtitle = styled.span`
  margin: auto;
  font-size: 1rem;
  font-weight: 500;
`;

export const Form = styled.form`
  padding: 20px;
  font-family: 'Inter', sans-serif;
  margin-bottom: 50px;

  button {
    width: 100%;
    margin: 20px 0 0 0;
  }

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

export const SignUpFooter = styled.span`
  color: #858585;
  margin: 5px auto;
  font-size: 1rem;
`;

export const SignInLink = styled(Link)`
  color: #4285f4;
  font-weight: 600;
  margin: auto;
  font-size: 1.1rem;
`;
