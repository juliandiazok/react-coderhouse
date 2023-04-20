import React, { useState, useEffect } from 'react';
import { mFetch } from '../../assets/utils/mFetch';
import ItemCard from '../ItemCard/ItemCard';
import Filter from '../Filter/Filter';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
	const [productos, setProductos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { categoria } = useParams();

	useEffect(() => {
		mFetch()
			.then((resultado) => {
				setProductos(resultado);
			})
			.catch((error) => console.log(error))
			.finally(() => setIsLoading(false));
	}, []);

	const handleProductFiltered = ({ filterState, handleFilterChange }) => (
		<center>
			<h2>Buscar Producto</h2>
			<br></br>
			<input type='text' value={filterState} onChange={handleFilterChange} />

			{isLoading ? (
				<h2>Cargando...</h2>
			) : (
				<>
					<div
						style={{
							backgroundColor: 'white',
							display: 'flex',
							flexDirection: 'row',
							flexWrap: 'wrap',
							padding: '10vh',
							/*height: '70vh',*/
						}}>
						{filterState === ''
							? productos.map(({ id, foto, name, price, categoria }) => (
									<ItemCard
										id={id}
										foto={foto}
										name={name}
										price={price}
										categoria={categoria}
									/>
							  ))
							: productos
									.filter((producto) =>
										producto.name
											.toLowerCase()
											.includes(filterState.toLowerCase())
									)
									.map(({ id, foto, name, price, categoria }) => (
										<ItemCard
											id={id}
											foto={foto}
											name={name}
											price={price}
											categoria={categoria}
										/>
									))}
					</div>
				</>
			)}
		</center>
	);

	return (
		<div style={{ padding: '1' }}>
			<div
				style={{
					backgroundColor: 'white',
					padding: '10vh',
					/*height: '70vh',*/
				}}>
				<Filter>{handleProductFiltered}</Filter>
			</div>
		</div>
	);
}

export default ItemListContainer;
