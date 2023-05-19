import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Loading } from '../Loading/Loading';

export const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { pid } = useParams();

	useEffect(() => {
		const dbFirestore = getFirestore();
		const queryDoc = doc(dbFirestore, 'products', pid);

		getDoc(queryDoc)
			.then((res) => setItem({ id: res.id, ...res.data() }))
			.catch((error) => console.log(error))
			.finally(() => setIsLoading(false));
	}, []);

	return <div>{isLoading ? <Loading /> : <ItemDetail item={item} />}</div>;
};
