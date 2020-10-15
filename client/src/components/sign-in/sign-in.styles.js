import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignInContainer = styled.section`
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

export const Form = styled.form`
  padding: 20px;
  font-family: 'Inter', sans-serif;
  margin-bottom: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  button {
    margin: 20px 0 0 0;
  }
`;

export const SignInFooter = styled.span`
  color: #858585;
  margin: 5px auto;
  font-size: 1rem;
`;

export const SignUpLink = styled(Link)`
  color: #4285f4;
  font-weight: 600;
  margin: auto;
  font-size: 1.1rem;
`;
