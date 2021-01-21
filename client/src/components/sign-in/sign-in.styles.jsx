import styled from 'styled-components';

export const SignInContainer = styled.article`
  width: 380px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 460px) {
    width: 260px;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 460px) {
    display: block;
    
    button{
      margin: 0 auto 10px auto;
    }
  }
`;
