import { useState } from 'react';
import { useCartContext } from '../../CartContext/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';

export const ItemDetail = ({ item }) => {
	const styles = {
		card: {
			width: '18rem',
		},
	};

	const [isCant, setIsCant] = useState(false);

	const { addToCart } = useCartContext();

	const onAdd = (cantidad) => {
		addToCart({ ...item, cantidad });
		setIsCant(true);
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
					<Card.Text>Stock: {item.stock}</Card.Text>
					<Card.Text>
						{!isCant ? (
							<ItemCount onAdd={onAdd} />
						) : (
							<>
								<Link to={'/cart'} className='btn btn-outline-danger'>
									Finalizar tu compra
								</Link>
								<Link to={'/'} className='btn btn-outline-success'>
									Seguir comprando
								</Link>
							</>
						)}
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};
