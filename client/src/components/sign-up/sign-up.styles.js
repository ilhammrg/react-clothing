import styled from 'styled-components';

export const SignupContainer = styled.div`
  background-color: #fff;
  width: 90%;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  margin-bottom: 50px;
  font-family: 'Inter', sans-serif;
`;

export const SignupHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
  border-radius: 5px 5px 0 0;
  padding: 25px;
  background-color: #fbfbfb;
  text-align: center;
`;

export const Title = styled.span`
  margin: 0 auto 5px auto;
  font-size: 1rem;
  font-weight: 200;
`;

export const Subtitle = styled.span`
  margin: auto;
  font-size: 1rem;
  font-weight: 500;
`;

export const Form = styled.form`
  padding: 0 20px 20px 20px;
  font-family: 'Inter', sans-serif;

  button {
    display: block;
    margin: 0 auto;
  }
`;