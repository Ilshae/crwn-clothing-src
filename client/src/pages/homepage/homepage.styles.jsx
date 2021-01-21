import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const HomePageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: 0.2s ${fadeIn};
`;
