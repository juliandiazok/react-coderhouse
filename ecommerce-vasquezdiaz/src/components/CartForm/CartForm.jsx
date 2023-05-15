import { useState } from 'react';

const CartForm = () => {
	const [dataForm, setDataForm] = useState({
		name: '',
		phone: '',
		email: '',
	});

	const handleOnChange = (evt) => {
		console.log('nombre del input', evt.target.name);
		console.log('valor del input', evt.target.value);
		setDataForm({
			...dataForm,
			[evt.target.name]: evt.target.value,
		});
	};

	return (
		<div>
			<form onSubmit={generarOrden}>
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

				<button className='btn btn-outline-danger'>generar orden</button>
			</form>
		</div>
	);
};

export default CartForm;
