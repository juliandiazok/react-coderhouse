import { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { size } from 'lodash';
import { useCartContext } from '../../CartContext/CartContext';
import { validateEmail } from '../../assets/utils/helpers';
import success from '../../assets/images/icone-de-tique-ronde-orange.png';

export const CartForm = () => {
	const [id, setId] = useState('');
	const [errorName, setErrorName] = useState('');
	const [errorPhone, setErrorPhone] = useState('');
	const [errorEmail, setErrorEmail] = useState('');
	const [errorConfirm, setErrorConfirm] = useState('');
	const [completed, setCompleted] = useState(false);
	const [dataForm, setDataForm] = useState({
		name: '',
		phone: '',
		email: '',
		confirm: '',
	});

	var numbers = '0123456789';
	var letters = 'abcdefghijklmnñopqrstuvwxyz';

	const { cartList, totalPrice, vaciarCarrito } = useCartContext();

	const styles = {
		orderComplete: {
			justifyContent: 'center',
			alignItems: 'center',
		},
	};

	const generateOrder = (evt) => {
		evt.preventDefault();
		if (!validateData()) {
			return;
		}

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
				setDataForm({ name: '', phone: '', email: '', confirm: '' });
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

	const has_numbers = (text) => {
		for (let i = 0; i < text.length; i++) {
			if (numbers.indexOf(text.charAt(i), 0) != -1) {
				return true;
			}
		}
		return false;
	};

	const has_letters = (text) => {
		for (let i = 0; i < text.length; i++) {
			if (letters.indexOf(text.charAt(i), 0) != -1) {
				return true;
			}
		}
		return false;
	};

	const validateData = () => {
		setErrorName('');
		setErrorPhone('');
		setErrorEmail('');
		setErrorConfirm('');
		let isValid = true;

		if (size(dataForm.name) < 3) {
			setErrorName('Debes ingresar un nombre de al menos 3 caracteres');
			isValid = false;
		}

		if (has_numbers(dataForm.name)) {
			setErrorName('Debes ingresar un nombre válido');
			isValid = false;
		}

		if (size(dataForm.phone) < 3) {
			setErrorPhone('Debes ingresar un numero de al menos 3 caracteres');
			isValid = false;
		}

		if (has_letters(dataForm.phone)) {
			setErrorPhone('Debes ingresar un numero válido');
			isValid = false;
		}

		if (!validateEmail(dataForm.email)) {
			setErrorEmail('Debes ingresar un correo válido');
			isValid = false;
		}

		if (!validateEmail(dataForm.confirm)) {
			setErrorConfirm('Debes ingresar un correo válido');
			isValid = false;
		}

		if (dataForm.confirm !== dataForm.email) {
			setErrorEmail('El E-mail y la confirmación deben ser iguales');
			setErrorConfirm('El E-mail y la confirmación deben ser iguales');
			isValid = false;
		}

		return isValid;
	};

	return (
		<div>
			{!completed ? (
				<>
					<center>
						<form onSubmit={generateOrder}>
							<input
								type='text'
								name='name'
								onChange={handleOnChange}
								value={dataForm.name}
								placeholder='Ingrese el nombre'
							/>
							<br />
							<span style={{ color: 'red' }}>{errorName}</span>
							<br />
							<input
								type='text'
								name='phone'
								onChange={handleOnChange}
								errorMessage={errorPhone}
								value={dataForm.phone}
								placeholder='Ingrese el teléfono/celular'
							/>
							<br />
							<span style={{ color: 'red' }}>{errorPhone}</span>
							<br />
							<input
								type='text'
								name='email'
								onChange={handleOnChange}
								errorMessage={errorEmail}
								value={dataForm.email}
								placeholder='Ingrese el E-mail'
							/>
							<br />
							<span style={{ color: 'red' }}>{errorEmail}</span>
							<br />
							<input
								type='text'
								name='confirm'
								onChange={handleOnChange}
								errorMessage={errorConfirm}
								value={dataForm.confirm}
								placeholder='Ingrese el E-mail nuevamente'
							/>
							<br />
							<span style={{ color: 'red' }}>{errorConfirm}</span>
							<h4>Precio Total: {totalPrice()}</h4>
							<button className='btn btn-outline-danger'>Generar Orden</button>
						</form>
					</center>
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
