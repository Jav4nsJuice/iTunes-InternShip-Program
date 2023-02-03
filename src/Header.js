import React from 'react';
import styled from 'styled-components';
import Palette from './palette';

const Content = styled.div`
	position: fixed;
	width: 100%;
	height: 80px;
	background-color: ${Palette('Primary')};
`;

const Title = styled.h2`
	margin: 5px 0 0;
	text-align: center;
    font-family: 'Hanalei Fill', cursive;
`;

class Header extends React.Component {
	render() {
		return (
			<Content>
				<Title>iTunes Search API</Title>
			</Content>
		);
	}
}

export default Header;
