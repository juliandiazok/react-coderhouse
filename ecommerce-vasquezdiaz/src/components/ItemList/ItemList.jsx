import { memo } from 'react';
import ItemCard from '../ItemCard/ItemCard';

const ItemList = memo(({ productos }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
			}}>
			{productos.map(({ id, photo, name, price, brand, category }) => (
				<ItemCard
					key={id}
					id={id}
					category={category}
					name={name}
					brand={brand}
					price={price}
					photo={photo}
				/>
			))}
		</div>
	);
});

export default ItemList;
