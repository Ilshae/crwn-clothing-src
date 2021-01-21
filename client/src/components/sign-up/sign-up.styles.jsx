import styled from 'styled-components';

export const SignUpContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 460px) {
    width: 260px;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
