import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	FieldValue,
	Timestamp,
	updateDoc,
} from 'firebase/firestore';

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
	await updateDoc(cardsRef, { title: title });
};

export const removeCard = async (cardId: string) => {
	const cardRef = doc(db, 'cards', cardId);
	await deleteDoc(cardRef);
};

export const updateCardPosition = async (cardId: string, timestamp: Timestamp) => {
	const cardRef = doc(db, 'cards', cardId);
	await updateDoc(cardRef, { timestamp: timestamp });
};
