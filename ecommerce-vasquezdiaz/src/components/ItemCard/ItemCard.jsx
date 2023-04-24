import React from 'react';
import { Link } from 'react-router-dom';

function ItemCard({ id, foto, name, marca, price, categoria }) {
	const styles = {
		'w-20': {
			marginRight: '1px',
			marginBottom: '1px',
		},
	};

	return (
		<div key={id} className='card w-20' style={styles['w-20']}>
			<Link to={`/detail/${id}`}>
				<img src={foto} className='card-img-top' alt='imagen-card' />
			</Link>
			<div className='card-body'>
				<h6>Nombre: {name}</h6>
				<label>Marca: {marca}</label>
				<br></br>
				<label>Precio: {price}</label>
				<br></br>
				<label>Categoria: {categoria}</label>
			</div>
		</div>
	);
}

export default ItemCard;
