import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { DraggableLocation, DropResult } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';

import { db } from '../../../../../data/firebase';
import { ListType } from '../model/ListType';
import { CardType } from '../model/CardType';

export const addCard = async (title: string, listId: string) => {
	if (!title) return;

	const newCard: CardType = {
		id: uuid(),
		title,
		type: 'card',
	};
	const listRef = doc(db, 'lists', listId);
	await updateDoc(listRef, { cards: arrayUnion(newCard) });
};

export const updateCardTitle = async (newTitle: string, listId: string, cardId: string) => {
	const listRef = doc(db, 'lists', listId);
	onSnapshot(listRef, async (doc) => {
		if (doc.exists()) {
			const documentData = doc.data();
			if (documentData) {
				const cards: CardType[] = documentData.cards;
				const hasPendingWrites = doc.metadata.hasPendingWrites;
				//hasPendingWrites is for local changes
				// if no control this we have infinite loop
				if (!hasPendingWrites) {
					const updatedCards = cards.map((card) => {
						if (card.id === cardId) {
							card.title = newTitle;
						}
						return card;
					});
					await updateDoc(listRef, { cards: updatedCards });
				}
			}
		}
	});
};

export const updatedCardsPositionOnList = async (
	lists: ListType[],
	destination: DraggableLocation,
	source: DraggableLocation
) => {
	const list = lists.filter((list) => list.id === source.droppableId)[0];
	const updatedCards = list.cards.map((card, index) => {
		if (index === source.index) {
			return list.cards[destination.index];
		} else if (index === destination.index) {
			return list.cards[source.index];
		}
		return card;
	});

	const listsRef = doc(db, 'lists', destination.droppableId);
	await updateDoc(listsRef, { cards: updatedCards });
};

export const updateCardPositionOnDifferentList = async (lists: ListType[], result: DropResult) => {
	const { destination, source, draggableId, type } = result;
	if (destination) {
		const sourceList = lists.filter((list) => list.id === source.droppableId)[0];
		const destinationList = lists.filter((list) => list.id === destination.droppableId)[0];
		const draggingCard = sourceList.cards.filter((card) => card.id === draggableId)[0];

		const sourceListRef = doc(db, 'lists', source.droppableId);
		sourceList.cards.splice(source.index, 1);
		await updateDoc(sourceListRef, { cards: sourceList.cards });

		const destinationListRef = doc(db, 'lists', destination.droppableId);
		destinationList.cards.splice(destination.index, 0, draggingCard);
		await updateDoc(destinationListRef, { cards: destinationList.cards });
	}
};

export const removeCard = (listId: string, cardId: string) => {
	const listRef = doc(db, 'lists', listId);
	onSnapshot(listRef, async (doc) => {
		const documentData = doc.data();
		if (documentData) {
			const cards: CardType[] = documentData.cards;
			const cardToRemove = cards.filter((card) => card.id === cardId);
			await updateDoc(listRef, {
				cards: arrayRemove(...cardToRemove),
			});
		}
	});
};
