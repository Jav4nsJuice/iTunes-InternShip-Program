import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import styled, { createGlobalStyle } from 'styled-components';
import Palette from './palette';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
		margin: 0;
		background-color: ${Palette('Grey', 800)};
  }
`;

const Content = styled.div`
	width: 100%;
	height: 100%;
`;

class App extends React.Component {
	render() {
		return (
			<>
				<GlobalStyle />
				<Content>
					<Header />
				</Content>
			</>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
