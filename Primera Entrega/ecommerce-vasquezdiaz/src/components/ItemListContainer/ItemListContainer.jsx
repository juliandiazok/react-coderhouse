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
		if (!categoria) {
			mFetch()
				.then((resultado) => {
					setProductos(resultado);
				})
				.catch((error) => console.log(error))
				.finally(() => setIsLoading(false));
		} else {
			mFetch()
				.then((resultado) => {
					setProductos(
						resultado.filter((producto) => producto.categoria === categoria)
					);
				})
				.catch((error) => console.log(error))
				.finally(() => setIsLoading(false));
		}
	}, [categoria]);
	const handleProductFiltered = ({ filterState, handleFilterChange }) => (
		<center>
			{isLoading ? (
				<h2>Cargando...</h2>
			) : (
				<>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							flexWrap: 'wrap',
						}}>
						{filterState === ''
							? productos.map(({ id, categoria, name, marca, price, foto }) => (
									<ItemCard
										id={id}
										categoria={categoria}
										name={name}
										marca={marca}
										price={price}
										foto={foto}
									/>
							  ))
							: productos
									.filter((producto) =>
										producto.name
											.toLowerCase()
											.includes(filterState.toLowerCase())
									)
									.map(({ id, categoria, name, marca, price, foto }) => (
										<ItemCard
											id={id}
											categoria={categoria}
											name={name}
											marca={marca}
											price={price}
											foto={foto}
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
