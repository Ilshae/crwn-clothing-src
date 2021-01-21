import styled from 'styled-components';

export const FooterContainer = styled.footer`
  height: 50px;
  width: 100%;
  margin-top: 60px;
  text-align: center;
`;

export const AuthorContainer = styled.div`
  font-size: 22px;
  padding: 20px 0 5px 0;
  border-top: 2px solid black;
  position: absolute;
  bottom: 0;
  width: 100%;

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