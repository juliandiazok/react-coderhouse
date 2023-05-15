import React, { useState, useEffect } from 'react';
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import ItemList from '../ItemList/ItemList';

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
		},
	};

	useEffect(() => {
		const dbFirestore = getFirestore();
		const queryCollection = collection(dbFirestore, 'products');

		if (!category) {
			getDocs(queryCollection)
				.then((res) =>
					setProductos(
						res.docs.map((producto) => ({
							id: producto.id,
							...producto.data(),
						}))
					)
				)
				.catch((error) => console.log(error))
				.finally(() => setIsLoading(false));
		} else {
			const queryCollectionFiltered = query(
				queryCollection,
				where('category', '==', category)
			);

			getDocs(queryCollectionFiltered)
				.then((res) =>
					setProductos(
						res.docs.map((producto) => ({
							id: producto.id,
							...producto.data(),
						}))
					)
				)
				.catch((error) => console.log(error))
				.finally(() => setIsLoading(false));
		}
	}, [category]);

	return (
		<div style={{ padding: '1' }}>
			<div style={styles.products}>
				{isLoading ? <Loading /> : <ItemList productos={productos} />}
			</div>
		</div>
	);
}

export default ItemListContainer;
