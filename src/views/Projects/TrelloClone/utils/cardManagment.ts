import { randomUUID } from 'crypto';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

import { db } from '../../../../../data/firebase';
import { Card } from '../model/Card';
import { ListProps } from '../model/ListProps';

export const addMoreCard = async (title: string, listId: string) => {
	if (!title) return;

	const newCard: Card = {
		id: randomUUID(),
		title,
		type: 'card',
	};

	const listRef = doc(db, 'lists', listId);
	await updateDoc(listRef, {
		cards: arrayUnion(newCard),
	});
};

export const removeCard = (index: number, listId: string, cardId: string) => {
	const lists: ListProps[] = []; //TODO LOAD LISTS
	const listRef = doc(db, 'lists', listId);

	lists.forEach(async (list) => {
		if (list.id === listId) {
			list.cards.splice(index, 1);
			await updateDoc(listRef, {
				cards: list.cards.filter((card) => card.id !== cardId),
			});
		}
		return list;
	});
};

export const updateCardTitle = (
	title: string,
	index: number,
	listId: string,
	cardId: string
) => {
	const lists: ListProps[] = []; //TODO LOAD LISTS
	const listRef = doc(db, 'lists', listId);

	lists.forEach(async (list) => {
		if (list.id === listId) {
			list.cards[index].title = title;
			await updateDoc(listRef, {
				cards: list.cards.map((card) => {
					if (card.id === cardId) {
						card.title = title;
						return card;
					}
				}),
			});
		}
		return list;
	});
};
