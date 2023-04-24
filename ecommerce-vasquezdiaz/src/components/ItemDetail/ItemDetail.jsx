import React from 'react';
import Card from 'react-bootstrap/Card';

export const ItemDetail = ({ item }) => {
	const styles = {
		card: {
			width: '18rem',
		},
	};

	return (
		<div>
			<Card style={styles.card}>
				<Card.Img variant='top' src={item.photo} />
				<Card.Body>
					<Card.Title>
						{item.brand}: {item.name}
					</Card.Title>
					<Card.Text>Categoria: {item.category}</Card.Text>
					<Card.Text>Precio: ${item.price}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};
