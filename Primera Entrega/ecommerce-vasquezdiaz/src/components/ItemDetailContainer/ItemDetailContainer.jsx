import React from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
	const { pid } = useParams();

	return (
		<div>
			{pid}
			<ItemDetail />
		</div>
	);
};
