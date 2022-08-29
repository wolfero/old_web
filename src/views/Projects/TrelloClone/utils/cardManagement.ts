import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	orderBy,
	query,
	Timestamp,
	updateDoc,
} from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';
import { DraggableLocation } from 'react-beautiful-dnd';

import { db, timestamp } from '../../../../../data/firebase';
import { CardType } from '../model/CardType';

export const loadCards = (setCards: Dispatch<SetStateAction<CardType[]>>) => {
	const newQuery = query(collection(db, 'cards'), orderBy('timestamp', 'asc'));
	onSnapshot(newQuery, (snapshot) => {
		const allCards = snapshot.docs.map((doc): CardType => {
			const { title, type, tasks, timestamp } = doc.data();
			return {
				id: doc.id,
				title,
				type,
				tasks,
				timestamp,
			};
		});
		setCards([...allCards]);
	});
};

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

export const updateCardPosition = async (
	cards: CardType[],
	destination: DraggableLocation,
	source: DraggableLocation
) => {
	const cardDestinationId = cards[destination.index].id;
	const cardDestinationTimesTamp = cards[source.index].timestamp;
	const cardDestinationRef = doc(db, 'cards', cardDestinationId);
	await updateDoc(cardDestinationRef, { timestamp: cardDestinationTimesTamp });
	
	const cardSourceId = cards[source.index].id;
	const cardSourceTimesTamp = cards[destination.index].timestamp;
	const cardSourceRef = doc(db, 'cards', cardSourceId);
	await updateDoc(cardSourceRef, { timestamp: cardSourceTimesTamp });
};

export const removeCard = async (cardId: string) => {
	const cardRef = doc(db, 'cards', cardId);
	await deleteDoc(cardRef);
};
