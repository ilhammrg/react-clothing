import styled from 'styled-components';

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 250px;
  height: 250px;

  @media screen and (min-width: 1024px) {
    width: 350px;
    height: 350px;
  }
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #858585;
  text-align: center;
`;
