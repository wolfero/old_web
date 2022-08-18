import { randomUUID } from 'crypto';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

import { db } from '../../../../../data/firebase';
import { TaskType } from '../model/TaskType';
import { CardType } from '../model/CardType';
import loadCards from './loadCards';

export const addMoreTask = async (title: string, cardId: string) => {
	if (!title) return;

	const newTask: TaskType = {
		id: randomUUID(),
		title,
		type: 'task',
	};

	const cardRef = doc(db, 'lists', cardId);
	await updateDoc(cardRef, {
		tasks: arrayUnion(newTask),
	});
};

export const removeTask = async (
	index: number,
	cardId: string,
	taskId: string
) => {
	const cards: CardType[] = await loadCards();
	const cardRef = doc(db, 'lists', cardId);

	cards.forEach(async (card) => {
		if (card.id === cardId) {
			card.tasks.splice(index, 1);
			await updateDoc(cardRef, {
				tasks: card.tasks.filter((task) => task.id !== taskId),
			});
		}
		return card;
	});
};

export const updateTaskTitle = async (
	title: string,
	index: number,
	cardId: string,
	taskId: string
) => {
	const cards: CardType[] = await loadCards();
	const cardRef = doc(db, 'lists', cardId);

	cards.forEach(async (card) => {
		if (card.id === cardId) {
			card.tasks[index].title = title;
			await updateDoc(cardRef, {
				tasks: card.tasks.map((task) => {
					if (task.id === taskId) {
						task.title = title;
						return task;
					}
				}),
			});
		}
		return card;
	});
};
