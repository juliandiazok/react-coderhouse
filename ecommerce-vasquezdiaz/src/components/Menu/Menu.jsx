import React from 'react';
import { CartContextProvider } from '../../CartContext/CartContext';
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
import { CartContainer } from '../CartContainer/CartContainer';

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
		<CartContextProvider>
			<div>
				<Router>
					<NavbarLight />
					<div style={styles.menu}>
						<Routes>
							<Route path='/' element={<ItemListContainer />} />
							<Route
								path='/category/:category'
								element={<ItemListContainer />}
							/>
							<Route path='/detail/:pid' element={<ItemDetailContainer />} />
							<Route path='/cart' element={<CartContainer />} />
							<Route path='*' element={<Navigate to='/' />} />
						</Routes>
					</div>
				</Router>
			</div>
		</CartContextProvider>
	);
};

export default Menu;
