import React from 'react';

const Item = ({ collectionName, artistName, collectionPrice, artworkUrl100 }) => (
	<div className="item">
	<div className="artwork">
		<img src={artworkUrl100} alt = 'logoAlbum' />
	</div>
	<div className="collectionName">{collectionName}</div>
	<div className="artistName">{artistName}</div>
	<div className="collectionPrice">{collectionPrice}$</div>
	</div>
);

export default Item;