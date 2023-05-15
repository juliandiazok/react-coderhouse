import React from 'react';
import { useCartContext } from '../../CartContext/CartContext';

export default function CartWidget() {
	const { totalQuantity } = useCartContext();
	return (
		<div
			style={{
				display: 'block',
				paddingRight: 30,
				textDecoration: 'none',
			}}>
			<div>{totalQuantity() !== 0 && totalQuantity()}🛒</div>
		</div>
	);
}
