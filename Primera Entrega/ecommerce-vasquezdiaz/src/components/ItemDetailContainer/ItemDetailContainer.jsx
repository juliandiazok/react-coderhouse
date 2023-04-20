import React from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
	const { pid } = useParams();
	console.log(pid);

	return (
		<div>
			{pid}
			<ItemDetail />
		</div>
	);
};
