import styled from 'styled-components';

export const MenuItemContainer = styled.button`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;
  background-color: #efefef;
  border: none;

  &:hover {
    cursor: pointer;

    div:first-child {
      transform: scale(1.1);
      transition: transform 1.2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    div:last-child {
      opacity: 0.8;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (min-width: 768px) {
    height: ${props => props.height};
  }
`;

export const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
`;

export const ContentContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  transition: 0.2s;
`;

export const ContentTitle = styled.h1`
  font-weight: 400;
  margin-bottom: 6px;
  font-size: 1.3rem;
  font-family: 'Bebas Neue', cursive;
  color: #4a4a4a;
`;

export const ContentSubtitle = styled.span`
  font-weight: 200;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
`;