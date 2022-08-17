import { randomUUID } from 'crypto';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

import { db } from '../../../../../data/firebase';
import { TaskType } from '../model/TaskType';
import { CardType } from '../model/CardType';
import loadCards from './loadCards';

export const addMoreCard = async (title: string, listId: string) => {
	if (!title) return;

	const newCard: TaskType = {
		id: randomUUID(),
		title,
		type: 'card',
	};

	const listRef = doc(db, 'lists', listId);
	await updateDoc(listRef, {
		cards: arrayUnion(newCard),
	});
};

export const removeCard = async (
	index: number,
	listId: string,
	cardId: string
) => {
	const lists: CardType[] = await loadCards();
	const listRef = doc(db, 'lists', listId);

	lists.forEach(async (list) => {
		if (list.id === listId) {
			list.tasks.splice(index, 1);
			await updateDoc(listRef, {
				cards: list.tasks.filter((card) => card.id !== cardId),
			});
		}
		return list;
	});
};

export const updateCardTitle = async (
	title: string,
	index: number,
	listId: string,
	cardId: string
) => {
	const lists: CardType[] = await loadCards();
	const listRef = doc(db, 'lists', listId);

	lists.forEach(async (list) => {
		if (list.id === listId) {
			list.tasks[index].title = title;
			await updateDoc(listRef, {
				cards: list.tasks.map((card) => {
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
