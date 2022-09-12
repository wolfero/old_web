import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	orderBy,
	query,
	updateDoc,
} from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';
import { DraggableLocation } from 'react-beautiful-dnd';

import { db, timestamp } from '../../../../../data/firebase';
import { ListType } from '../model/ListType';

export const loadLists = (setLists: Dispatch<SetStateAction<ListType[]>>) => {
	const newQuery = query(collection(db, 'lists'), orderBy('timestamp', 'asc'));
	onSnapshot(newQuery, (snapshot) => {
		const allLists = snapshot.docs.map((doc): ListType => {
			const { title, type, cards, timestamp } = doc.data();
			return {
				id: doc.id,
				title,
				type,
				cards,
				timestamp,
			};
		});
		setLists([...allLists]);
	});
};

export const addList = async (title: string) => {
	if (!title) return;

	await addDoc(collection(db, 'lists'), {
		title,
		type: 'list',
		cards: [],
		timestamp,
	});
};

export const updateListTitle = async (title: string, listId: string) => {
	const listRef = doc(db, 'lists', listId);
	await updateDoc(listRef, { title: title });
};

export const updateListPosition = async (
	lists: ListType[],
	destination: DraggableLocation,
	source: DraggableLocation
) => {
	const listDestinationId = lists[destination.index].id;
	const listDestinationTimesTamp = lists[source.index].timestamp;
	const listDestinationRef = doc(db, 'lists', listDestinationId);
	await updateDoc(listDestinationRef, { timestamp: listDestinationTimesTamp });

	const listSourceId = lists[source.index].id;
	const listSourceTimesTamp = lists[destination.index].timestamp;
	const listSourceRef = doc(db, 'lists', listSourceId);
	await updateDoc(listSourceRef, { timestamp: listSourceTimesTamp });
};

export const removeList = async (listId: string) => {
	const listRef = doc(db, 'lists', listId);
	await deleteDoc(listRef);
};
