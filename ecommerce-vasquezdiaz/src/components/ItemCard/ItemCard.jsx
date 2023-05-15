import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const styles = {
	'w-20': {
		marginRight: '1px',
		marginBottom: '1px',
	},
};

const ItemCard = memo(({ id, photo, name, brand, price, category }) => {
	return (
		<div key={id} className='card w-20' style={styles['w-20']}>
			<Link to={`/detail/${id}`}>
				<img src={photo} className='card-img-top' alt='imagen-card' />
			</Link>
			<div className='card-body'>
				<h6>Nombre: {name}</h6>
				<label>Marca: {brand}</label>
				<br></br>
				<label>Precio: {price}</label>
				<br></br>
				<label>Categoria: {category}</label>
			</div>
		</div>
	);
});

export default ItemCard;
