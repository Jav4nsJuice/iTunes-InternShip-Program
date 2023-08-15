import React from 'react';
import Item from './Item';
import './ItemsList.css'

export const ItemsList = ({ items }) => {
	const itemsArray = items.map((item, index) => <Item key={index} {...item} />);
	return (
		<div className="ItemsList">
			{itemsArray}
		</div>
	)
};