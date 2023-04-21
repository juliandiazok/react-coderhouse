import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCard from '../ItemCard/ItemCard';

export const ItemDetail = ({ item }) => {
	return (
		<div>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant='top' src={item.foto} />
				<Card.Body>
					<Card.Title>
						{item.marca}: {item.name}
					</Card.Title>
					<Card.Text>Categoria: {item.categoria}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};
