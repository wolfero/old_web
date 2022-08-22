import {
	arrayUnion,
	doc,
	onSnapshot,
	orderBy,
	query,
	updateDoc,
	collection,
} from 'firebase/firestore';
import { v4 as uuid } from 'uuid';

import { db } from '../../../../../data/firebase';
import { TaskType } from '../model/TaskType';
import { CardType } from '../model/CardType';

export const addMoreTask = async (title: string, cardId: string) => {
	if (!title) return;

	const newTask: TaskType = {
		id: uuid(),
		title,
		type: 'task',
	};
	const cardRef = doc(db, 'cards', cardId);
	await updateDoc(cardRef, { tasks: arrayUnion(newTask) });
};

export const updateTaskTitle = async (
	title: string,
	index: number,
	cardId: string,
	taskId: string
) => {
	const cards: CardType[] = [];
	const result = query(collection(db, 'cards'), orderBy('timestamp', 'asc'));
	onSnapshot(result, (snapshot) => {
		snapshot.docs.map((doc) => {
			const { id, title, type, tasks, timestamp } = doc.data();
			cards.push({
				id,
				title,
				type,
				tasks,
				timestamp,
			});
		});
	});

	const cardRef = doc(db, 'cards', cardId);
	cards.forEach(async (card) => {
		if (card.id === cardId) {
			card.tasks[index].title = title;
			await updateDoc(cardRef, {
				tasks: card.tasks.map((task) => {
					if (task.id === taskId) {
						task.title = title;
						return task;
					}
					return task;
				}),
			});
		}
		return card;
	});
};

export const removeTask = async (index: number, cardId: string, taskId: string) => {
	const cards: CardType[] = [];
	const result = query(collection(db, 'cards'), orderBy('timestamp', 'asc'));
	onSnapshot(result, (snapshot) => {
		snapshot.docs.map((doc) => {
			const { id, title, type, tasks, timestamp } = doc.data();
			cards.push({
				id,
				title,
				type,
				tasks,
				timestamp,
			});
		});
	});
	const cardRef = doc(db, 'cards', cardId);

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
