import image1 from '../images/store/1.jpg';
import image2 from '../images/store/2.jpg';
import image3 from '../images/store/3.jpg';
import image4 from '../images/store/4.jpg';
import image5 from '../images/store/5.jpg';
import image6 from '../images/store/6.jpg';

let productos = [
	{
		id: '1',
		category: 'Balanceado',
		name: 'Perros Cachorros',
		brand: 'Pro-Plan',
		stock: 10,
		price: 10000,
		photo: image1,
	},
	{
		id: '2',
		category: 'Balanceado',
		name: 'Perros Adultos',
		brand: 'Pro-Plan',
		stock: 8,
		price: 8500,
		photo: image2,
	},
	{
		id: '3',
		category: 'Balanceado',
		name: 'Perros Medianos',
		brand: 'Royal Canin',
		stock: 15,
		price: 6000,
		photo: image3,
	},
	{
		id: '4',
		category: 'Balanceado',
		name: 'Perros Pequeños',
		brand: 'Royal Canin',
		stock: 10,
		price: 6500,
		photo: image4,
	},
	{
		id: '5',
		category: 'Accesorios',
		name: 'Plato de Agua',
		brand: 'Generica',
		stock: 30,
		price: 1500,
		photo: image5,
	},
	{
		id: '6',
		category: 'Accesorios',
		name: 'Pelota de Tenis',
		brand: 'Generica',
		stock: 25,
		price: 300,
		photo: image6,
	},
];

export const mFetch = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(productos);
		}, 1000);
	});
};
