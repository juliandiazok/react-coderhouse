import React, { useState, useEffect } from 'react';
import { mFetch } from '../../assets/utils/mFetch';
import ItemCard from '../ItemCard/ItemCard';
import Filter from '../Filter/Filter';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
	const [productos, setProductos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { category } = useParams();
	const styles = {
		cards: {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
		},
		products: {
			padding: '10vh',
			/*height: '70vh',*/
		},
	};

	useEffect(() => {
		if (!category) {
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
						resultado.filter((producto) => producto.category === category)
					);
				})
				.catch((error) => console.log(error))
				.finally(() => setIsLoading(false));
		}
	}, [category]);
	const handleProductFiltered = ({ filterState, handleFilterChange }) => (
		<center>
			{isLoading ? (
				<h2>Cargando...</h2>
			) : (
				<>
					<div style={styles.cards}>
						{filterState === ''
							? productos.map(({ id, category, name, brand, price, photo }) => (
									<ItemCard
										id={id}
										category={category}
										name={name}
										brand={brand}
										price={price}
										photo={photo}
									/>
							  ))
							: productos
									.filter((producto) =>
										producto.name
											.toLowerCase()
											.includes(filterState.toLowerCase())
									)
									.map(({ id, category, name, brand, price, photo }) => (
										<ItemCard
											id={id}
											category={category}
											name={name}
											brand={brand}
											price={price}
											photo={photo}
										/>
									))}
					</div>
				</>
			)}
		</center>
	);

	return (
		<div style={{ padding: '1' }}>
			<div style={styles.products}>
				<Filter>{handleProductFiltered}</Filter>
			</div>
		</div>
	);
}

export default ItemListContainer;
