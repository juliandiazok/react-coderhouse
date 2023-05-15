import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyDR8Juj7up_eR_AAMkHIiVHK8wUPai5-BE',
	authDomain: 'ponzoo-petshop.firebaseapp.com',
	projectId: 'ponzoo-petshop',
	storageBucket: 'ponzoo-petshop.appspot.com',
	messagingSenderId: '13683914781',
	appId: '1:13683914781:web:78cb7ba22dd295f1496ef4',
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app;
