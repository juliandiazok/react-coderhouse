import { useCartContext } from '../../CartContext/CartContext';

export const CartContainer = () => {
	const { cartList, vaciarCarrito } = useCartContext();

	return (
		<div>
			{cartList.map((item) => (
				<div className='w-50'>
					<img className='w-25' src={item.photo} alt='imagen' />
					<label>
						{' '}
						Precio {item.price} - Cantidad : {item.cantidad}
					</label>
					<button> X </button>
				</div>
			))}
			<button onClick={vaciarCarrito} className='btn btn-outline-danger'>
				Vaciar Carrito
			</button>
		</div>
	);
};
