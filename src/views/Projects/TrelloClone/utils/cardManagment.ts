import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	updateDoc,
} from 'firebase/firestore';

import { db, timestamp } from '../../../../../data/firebase';
import { CardType } from '../model/CardType';
import loadCards from './loadCards';

export const addMoreCard = async (title: string, cardId: string) => {
	if (!title) return;

	await addDoc(collection(db, 'cards'), {
		id: cardId,
		title,
		type: 'card',
		tasks: [],
		timestamp,
	});
};

export const removeCard = async (cardId: string) => {
	await deleteDoc(doc(db, 'cards', cardId));
};

export const updateCardTitle = async (title: string, cardId: string) => {
	const cards: CardType[] = await loadCards();
	const cardsRef = doc(db, 'cards', cardId);

	cards.forEach(async (card) => {
		if (card.id === cardId) {
			card.title = title;
			await updateDoc(cardsRef, {
				title: title,
			});
		}
		return card;
	});
};
