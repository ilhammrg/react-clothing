import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/triangle.svg';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  /* box-shadow: 0 1px 1px rgba(0,0,0,0.1); */
  box-shadow: 0 1px 20px 0 rgba(200,200,200,.1), 0 1px 64px 0 rgba(0,0,0,.1);
  /* border-bottom: 1px solid #ddd; */
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 20px 5px;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`;

export const BrandLogo = styled(Logo)`
  height: 1.7rem;

  @media screen and (min-width: 768px) {
    margin-right: 5px;
  }
`;

export const BrandName = styled.h3`
  display: inline-block;
  font-size: 1.7rem;
  font-weight: 400;
  font-family: 'Fredericka the Great', cursive;

  &.medium {
    display: none;
  }

  @media screen and (min-width: 768px) {
    &.medium {
      display: inline-block;
    }
    
    &.small {
      display: none;
    }
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  font-family: 'Inter', sans-serif;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 20px 5px;
  cursor: pointer;
  font-weight: 200;
  color: #666;
  transition: 0.3s;

  @media screen and (min-width: 768px) {
    padding: 20px;
    margin: 0 5px;
    border-radius: 5px;

    &:hover {
      color: #131313;
      background-color: #efefef;
    }
  }
`;