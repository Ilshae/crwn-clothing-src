import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const SignInAndSignUpContainer = styled.article`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  padding: 0 20px;
  animation: 0.2s ${fadeIn};

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;

    > *:first-child {
      margin-bottom: 50px;
    }
  }

  @media screen and (max-width: 460px) {
    padding: 0 10px;
  }
`;
