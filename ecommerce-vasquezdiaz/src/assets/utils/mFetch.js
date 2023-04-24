import image1 from '../images/store/1.jpg';
import image2 from '../images/store/2.jpg';
import image3 from '../images/store/3.jpg';
import image4 from '../images/store/4.jpg';
import image5 from '../images/store/5.jpg';
import image6 from '../images/store/6.jpg';

let productos = [
	{
		id: '1',
		categoria: 'Balanceado',
		name: 'Perros Cachorros',
		marca: 'Pro-Plan',
		stock: 10,
		price: 10000,
		foto: image1,
	},
	{
		id: '2',
		categoria: 'Balanceado',
		name: 'Perros Adultos',
		marca: 'Pro-Plan',
		stock: 8,
		price: 8500,
		foto: image2,
	},
	{
		id: '3',
		categoria: 'Balanceado',
		name: 'Perros Medianos',
		marca: 'Royal Canin',
		stock: 15,
		price: 6000,
		foto: image3,
	},
	{
		id: '4',
		categoria: 'Balanceado',
		name: 'Perros Pequeños',
		marca: 'Royal Canin',
		stock: 10,
		price: 6500,
		foto: image4,
	},
	{
		id: '5',
		categoria: 'Accesorios',
		name: 'Plato de Agua',
		marca: 'Generica',
		stock: 30,
		price: 1500,
		foto: image5,
	},
	{
		id: '6',
		categoria: 'Accesorios',
		name: 'Pelota de Tenis',
		marca: 'Generica',
		stock: 25,
		price: 300,
		foto: image6,
	},
];

export const mFetch = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(productos);
		}, 1000);
	});
};
