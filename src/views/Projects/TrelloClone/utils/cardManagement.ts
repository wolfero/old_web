import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';

import { db, timestamp } from '../../../../../data/firebase';

export const addMoreCard = async (title: string) => {
	if (!title) return;

	await addDoc(collection(db, 'cards'), {
		title,
		type: 'card',
		tasks: [],
		timestamp,
	});
};

export const updateCardTitle = async (title: string, cardId: string) => {
	const cardsRef = doc(db, 'cards', cardId);
	await updateDoc(cardsRef, {
		title: title,
	});
};

export const removeCard = async (cardId: string) => {
	await deleteDoc(doc(db, 'cards', cardId));
};
