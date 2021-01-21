import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const ShopPageContainer = styled.article`
  width: 100%;
  animation: 0.2s ${fadeIn};
`;
