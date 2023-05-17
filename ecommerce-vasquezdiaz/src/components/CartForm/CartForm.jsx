import { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../CartContext/CartContext';
import success from '../../assets/images/icone-de-tique-ronde-orange.png';

export const CartForm = () => {
	const [id, setId] = useState('');
	const [completed, setCompleted] = useState(false);
	const [dataForm, setDataForm] = useState({
		name: '',
		phone: '',
		email: '',
	});

	const { cartList, totalPrice, vaciarCarrito } = useCartContext();

	const styles = {
		orderComplete: {
			justifyContent: 'center',
			alignItems: 'center',
		},
	};

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
				vaciarCarrito();
				setCompleted(true);
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
			{!completed ? (
				<>
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
						<p>Precio Total: {totalPrice()}</p>
						<button className='btn btn-outline-danger'>Generar Orden</button>
					</form>
				</>
			) : (
				<div style={styles.orderComplete}>
					<center>
						<img
							src={success}
							width='120'
							height='120'
							className='d-inline-block align-top'
							alt='Ponzoo'
						/>
						<h2>¡Se ha generado su pedido!</h2>
						<h3>ID: {id}</h3>
						<Link to='/'>Ir al inicio</Link>
					</center>
				</div>
			)}
		</div>
	);
};
