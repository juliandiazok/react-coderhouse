import { createContext, useContext, useState } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);

	const addToCart = (newProduct) => {
		const index = cartList.findIndex((prod) => newProduct.id === prod.id);

		if (index === -1) {
			setCartList([...cartList, newProduct]);
		} else {
			cartList[index].quantity += newProduct.quantity;
			setCartList([...cartList]);
		}
	};

	const deleteProduct = (pid) => {
		setCartList(cartList.filter((prod) => prod.id !== pid));
	};

	const totalPrice = () =>
		cartList.reduce(
			(total, prodObject) => (total += prodObject.quantity * prodObject.price),
			0
		);

	const totalQuantity = () =>
		cartList.reduce((total, prodObject) => (total += prodObject.quantity), 0);

	const vaciarCarrito = () => {
		setCartList([]);
	};

	return (
		<CartContext.Provider
			value={{
				cartList,
				addToCart,
				deleteProduct,
				totalPrice,
				totalQuantity,
				vaciarCarrito,
			}}>
			{children}
		</CartContext.Provider>
	);
};
