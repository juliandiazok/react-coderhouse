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

const Menu = () => {
	return (
		<div>
			<Router>
				<NavbarLight />
				<div
					style={{
						marginTop: '3vh',
						backgroundColor: 'white',
						padding: '10vh',
					}}>
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
