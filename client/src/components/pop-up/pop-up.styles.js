import styled from 'styled-components';

export const PopUpOverlay = styled.div`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(200,200,200,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopUpContainer = styled.div`
  width: 95%;
  max-width: 24rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 1px 20px rgba(200,200,200,0.7);
  grid-gap: 1rem;
`;

export const PopUpText = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: red;
`;