import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;
export const BrandContainer = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 24px;
  white-space: nowrap;
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
    
  }
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
  
  @media screen and (max-width: 350px) {
    font-size: 18px;
  }
`;

export const LogoContainer = styled.div`
  margin-right: 25px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 22px;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
    a {
      padding: 5px 8px;
    }
  }
  @media screen and (max-width: 350px) {
    font-size: 16px;
    a {
      padding: 2px 4px;
    }
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

OptionLink.displayName = 'OptionLink';
