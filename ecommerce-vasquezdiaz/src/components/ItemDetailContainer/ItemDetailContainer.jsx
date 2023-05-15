import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { mFetch } from '../../assets/utils/mFetch';
import { Loading } from '../Loading/Loading';

export const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { pid } = useParams();

	useEffect(() => {
		mFetch()
			.then((item) => {
				setItem(item.find((i) => i.id === pid));
			})
			.catch((error) => console.log(error))
			.finally(() => setIsLoading(false));
	}, []);
	return (
		<div>
			<center>{isLoading ? <Loading /> : <ItemDetail item={item} />}</center>
		</div>
	);
};
