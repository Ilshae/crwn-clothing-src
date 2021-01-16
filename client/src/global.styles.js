import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Fjalla One', sans-serif;
		font-size: 16px;
		padding: 20px 40px;
		background-color: white;

		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}

	a {
		text-decoration: none;
		color: black;
		&:hover {
    color: #bf0d46;
  }
	}

	* {
		box-sizing: border-box;
	}
`;

export const PageWrapper = styled.div`
		position: relative;
		min-height: 95vh;
`