import React from 'react';
import styled from 'styled-components';
import Palette from './palette';

const Card = styled.div`
	height: 200px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  white-space: nowrap;
	margin: 10px 5px;
	padding: 5px;
	background-color: ${Palette('Grey', 800)};
	color: ${Palette('White')};
	:hover {
		box-shadow: 0 0 0.75rem ${Palette('Secondary', 'dark')};
	}
`;

const CardText = styled.div`
	overflow: hidden;
	text-overflow: ellipsis;
	font-family: 'Hanalei Fill', cursive;
`;

const Item = ({ collectionName, artistName, collectionPrice, artworkUrl100 }) => (
	<Card>
		<div>
			<img src={artworkUrl100} alt = 'logoAlbum' />
		</div>
		<div>{collectionName}</div>
		<CardText>{artistName}</CardText>
		<CardText>{collectionPrice}$</CardText>
		
	</Card>
);

export default Item;
