import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyChPCaKOiHJyU0ZCnI1vAJMyZ1jJP755-0',
	authDomain: 'wolfero-trello-board-clone.firebaseapp.com',
	projectId: 'wolfero-trello-board-clone',
	storageBucket: 'wolfero-trello-board-clone.appspot.com',
	messagingSenderId: '531568263446',
	appId: '1:531568263446:web:1f2087186aced3d510d037',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const timestamp = serverTimestamp();

export { app, db, timestamp };
