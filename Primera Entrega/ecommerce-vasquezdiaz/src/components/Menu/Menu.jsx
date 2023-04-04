import React from 'react';
import NavbarLight from '../NavbarLight/NavbarLight';
import './Menu.css'
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Menu = () => {
	return (
	<div><NavbarLight/>
	<ItemListContainer text="Bienvenidos!! Esta es una prop pasada por parametro :)"/></div>
	);
};

export default Menu;
