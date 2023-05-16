import { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../../CartContext/CartContext';
import { Link } from 'react-router-dom';

export const CartContainer = () => {

	const { cartList, vaciarCarrito, deleteProduct, totalPrice, totalQuantity } =
		useCartContext();


	return (
		<div>
			{cartList.length !== 0 ? (
				<>
					{cartList.map((item) => (
						<div className='w-50' id={item.key} key={item.id}>
							<img className='w-25' src={item.photo} alt='imagen' />
							<label>
								{' '}
								Precio {item.price} - Cantidad : {item.quantity}
							</label>
							<button onClick={() => deleteProduct(item.id)}> X </button>
						</div>
					))}
					<h4>
						Total de Productos: {totalQuantity()} | Precio Total: {totalPrice()}
					</h4>
					<button onClick={vaciarCarrito} className='btn btn-outline-danger'>
						Vaciar Carrito
					</button>
					<Link to={'/checkout'} className='btn btn-outline-danger'>
						Finalizar Compra
					</Link>

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
