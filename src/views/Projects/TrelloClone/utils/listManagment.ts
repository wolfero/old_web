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

export const addMoreList = async (title: string) => {
	if (!title) return;

	await addDoc(collection(db, 'lists'), {
		title,
		type: 'list',
		cards: [],
		timestamp,
	});
};

export const removeList = async (listId: string) => {
	await deleteDoc(doc(db, 'lists', listId));
};

export const updateListTitle = async (title: string, listId: string) => {
	const lists: CardType[] = await loadCards();
	const listRef = doc(db, 'lists', listId);

	lists.forEach(async (list) => {
		if (list.id === listId) {
			list.title = title;
			await updateDoc(listRef, {
				title: title,
			});
		}
		return list;
	});
};
