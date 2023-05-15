import { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../../CartContext/CartContext';
import { Link } from 'react-router-dom';

export const CartContainer = () => {
	const [id, setId] = useState('');
	const [dataForm, setDataForm] = useState({
		name: '',
		phone: '',
		email: '',
	});

	const { cartList, vaciarCarrito, deleteProduct, totalPrice, totalQuantity } =
		useCartContext();

	const generateOrder = (evt) => {
		evt.preventDefault();

		const order = {};
		order.buyer = dataForm;
		order.items = cartList.map(({ name, brand, id, price, quantity }) => ({
			id,
			name,
			price,
			brand,
			quantity,
		}));
		order.total = totalPrice();

		const dbFirestore = getFirestore();
		const ordersCollection = collection(dbFirestore, 'orders');

		addDoc(ordersCollection, order)
			.then((res) => setId(res.id))
			.catch((error) => console.log(error))
			.finally(() => {
				setDataForm({ name: '', phone: '', email: '' });
				setTimeout(() => {
					vaciarCarrito();
				}, 2000);
			});
	};

	const handleOnChange = (evt) => {
		setDataForm({
			...dataForm,
			[evt.target.name]: evt.target.value,
		});
	};

	return (
		<div>
			{cartList.length !== 0 ? (
				<>
					{cartList.map((item) => (
						<div className='w-50' id={item.key}>
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

					<form onSubmit={generateOrder}>
						<input
							type='text'
							name='name'
							onChange={handleOnChange}
							value={dataForm.name}
							placeholder='Ingrese el nombre'
						/>
						<input
							type='text'
							name='phone'
							onChange={handleOnChange}
							value={dataForm.phone}
							placeholder='Ingrese el teléfono/celular'
						/>
						<input
							type='text'
							name='email'
							onChange={handleOnChange}
							value={dataForm.email}
							placeholder='Ingrese el E-mail'
						/>

						<button className='btn btn-outline-danger'>Generar orden</button>
					</form>
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
