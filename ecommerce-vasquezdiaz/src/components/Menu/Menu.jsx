import React from 'react';
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom';
import NavbarLight from '../NavbarLight/NavbarLight';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import fondo from '../../assets/images/fondo.jpg';

const Menu = () => {
	const styles = {
		menu: {
			marginTop: '3vh',
			backgroundColor: 'white',
			backgroundImage: `url(${fondo})`,
			padding: '10vh',
		},
	};

	return (
		<div>
			<Router>
				<NavbarLight />
				<div style={styles.menu}>
					<Routes>
						<Route path='/' element={<ItemListContainer />} />
						<Route
							path='/categoria/:categoria'
							element={<ItemListContainer />}
						/>
						<Route path='/detail/:pid' element={<ItemDetailContainer />} />
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
};

export default Menu;
