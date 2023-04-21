import React from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function CartWidget() {
	return (
		<div style={{ display: 'block', paddingRight: 30 }}>
			<div>
				<Badge color='secondary' badgeContent={1} overlap='rectangular'>
					<ShoppingCartIcon />{' '}
				</Badge>
			</div>
		</div>
	);
}
