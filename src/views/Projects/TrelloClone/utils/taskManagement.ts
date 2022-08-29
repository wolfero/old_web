import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { DraggableLocation, DropResult } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';

import { db } from '../../../../../data/firebase';
import { CardType } from '../model/CardType';
import { TaskType } from '../model/TaskType';

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

export const updateTaskTitle = (title: string, index: number, cardId: string, taskId: string) => {
	const cardRef = doc(db, 'cards', cardId);
	onSnapshot(cardRef, async (doc) => {
		const documentData = doc.data();
		if (documentData) {
			const tasks: TaskType[] = documentData.tasks;
			const updatedTask = tasks.filter((task) => task.id === taskId);
			updatedTask[0].title=title;
			// await updateDoc(cardRef, { tasks: [...updatedTask] });
		}
	});
	//TODO PROBLEMA DE BUCLE INFINITO DE PETICIONES DESCONOCIDO A LA HORA DE ACTUALIZAR TITULO
};

export const updatedTasksPositionOnCard = async (
	cards: CardType[],
	destination: DraggableLocation,
	source: DraggableLocation
) => {
	const card = cards.filter((card) => card.id === source.droppableId)[0];
	const updatedTasks = card.tasks.map((task, index) => {
		if (index === source.index) {
			return card.tasks[destination.index];
		} else if (index === destination.index) {
			return card.tasks[source.index];
		}
		return task;
	});

	const cardsRef = doc(db, 'cards', destination.droppableId);
	await updateDoc(cardsRef, { tasks: updatedTasks });
};

export const updateTaskPositionOnDifferentCard = async (cards: CardType[], result: DropResult) => {
	const { destination, source, draggableId, type } = result;
	if (destination) {
		const sourceCard = cards.filter((card) => card.id === source.droppableId)[0];
		const destinationCard = cards.filter((card) => card.id === destination.droppableId)[0];
		const draggingTask = sourceCard.tasks.filter((task) => task.id === draggableId)[0];

		const sourceCardRef = doc(db, 'cards', source.droppableId);
		sourceCard.tasks.splice(source.index, 1);
		await updateDoc(sourceCardRef, { tasks: sourceCard.tasks });

		const destinationCardRef = doc(db, 'cards', destination.droppableId);
		destinationCard.tasks.splice(destination.index, 0, draggingTask);
		await updateDoc(destinationCardRef, { tasks: destinationCard.tasks });
	}
};

export const removeTask = (cardId: string, taskId: string) => {
	const cardRef = doc(db, 'cards', cardId);
	onSnapshot(cardRef, async (doc) => {
		const documentData = doc.data();
		if (documentData) {
			const tasks: TaskType[] = documentData.tasks;
			const taskToRemove = tasks.filter((task) => task.id === taskId);
			await updateDoc(cardRef, {
				tasks: arrayRemove(...taskToRemove),
			});
		}
	});
};
