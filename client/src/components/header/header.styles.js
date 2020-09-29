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
`;

export const LogoContainer = styled(Link)`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 20px;
`;

export const BrandLogo = styled(Logo)`
    margin-right: 5px;
    height: 24px;
`;

export const BrandName = styled.h3`
    display: inline-block;
    font-size: 24px;
    font-weight: 400;
`;

export const OptionContainer = styled.div`
    display: flex;
    height: 100%;
    width: 50%;
    align-items: center;
    justify-content: flex-end;
    font-family: 'Inter', sans-serif;
`;

export const OptionLink = styled(Link)`
    padding: 20px;
    cursor: pointer;
    font-weight: 200;
    color: #666;
`;