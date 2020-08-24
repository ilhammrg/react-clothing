import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/triangle.svg';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    // font-family: 'Josefin Sans', sans-serif;
    font-family: 'Poppins', sans-serif;
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    padding: 0 5px;
`;

export const LogoContainer = styled(Link)`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 25px;
`;

export const BrandLogo = styled(Logo)`
    margin-right: 5px;
`;

export const BrandName = styled.h3`
    display: inline-block;
    font-size: 24px;
`;

export const OptionContainer = styled.div`
    display: flex;
    height: 100%;
    width: 50%;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    font-weight: 200;
`;