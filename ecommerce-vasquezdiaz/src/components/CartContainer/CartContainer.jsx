import { Link } from 'react-router-dom';
import { useCartContext } from '../../CartContext/CartContext';

export const CartContainer = () => {
	const { cartList, vaciarCarrito, deleteProduct, totalPrice, totalQuantity } =
		useCartContext();

	const styles = {
		cartStyle: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
		},
		cartText: {
			display: 'flex',
			justifyContent: 'flex-end',
		},
	};

	return (
		<div>
			{cartList.length !== 0 ? (
				<>
					{cartList.map((item) => (
						<div
							className='w-50'
							id={item.key}
							key={item.id}
							style={styles.cartStyle}>
							<img className='w-25' src={item.photo} alt='imagen' />
							<label>
								{' '}
								Precio {item.price} - Cantidad : {item.quantity}
							</label>
							<button onClick={() => deleteProduct(item.id)}> X </button>
						</div>
					))}
					<div style={styles.cartText}>
						<h4>
							Total de Productos: {totalQuantity()} | Precio Total:{' $'}
							{totalPrice()}
						</h4>
					</div>
					<div style={styles.cartText}>
						<button onClick={vaciarCarrito} className='btn btn-outline-danger'>
							Vaciar Carrito
						</button>
						<Link to={'/checkout'} className='btn btn-outline-danger'>
							Finalizar Compra
						</Link>
					</div>
				</>
			) : (
				<div>
					<h2>No hay productos en el carrito</h2>
					<Link to='/'>Ir al inicio</Link>
				</div>
			)}
		</div>
	);
};
